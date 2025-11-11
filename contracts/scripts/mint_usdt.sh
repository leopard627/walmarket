#!/bin/bash

# USDT Minting Script for Walmarket
# This script mints test USDT tokens to a specified address

set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║   Walmarket USDT Minting Script      ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════╝${NC}"
echo ""

# Check if required parameters are provided
if [ -z "$1" ] || [ -z "$2" ] || [ -z "$3" ]; then
    echo -e "${RED}Error: Missing required parameters${NC}"
    echo ""
    echo "Usage: $0 <TREASURY_CAP_ID> <AMOUNT> <RECIPIENT_ADDRESS> [PACKAGE_ID]"
    echo ""
    echo "Example:"
    echo "  $0 0x123abc...def 1000000000 0x456def...ghi 0xabc...package"
    echo ""
    echo "Or set PACKAGE_ID environment variable:"
    echo "  export PACKAGE_ID=0xabc...package"
    echo "  $0 0x123abc...def 1000000000 0x456def...ghi"
    echo ""
    echo "Note: Amount should be in the smallest unit (6 decimals for USDT)"
    echo "  - 1 USDT = 1,000,000 (1e6)"
    echo "  - 1,000 USDT = 1,000,000,000 (1e9)"
    exit 1
fi

TREASURY_CAP_ID=$1
AMOUNT=$2
RECIPIENT=$3

# Get Package ID from 4th argument or environment variable
if [ -n "$4" ]; then
    PACKAGE_ID=$4
elif [ -z "$PACKAGE_ID" ]; then
    echo -e "${RED}Error: Package ID not provided${NC}"
    echo ""
    echo "Please provide Package ID as 4th argument or set PACKAGE_ID environment variable:"
    echo "  export PACKAGE_ID=0xabc...package"
    echo "  $0 $TREASURY_CAP_ID $AMOUNT $RECIPIENT"
    echo ""
    echo "Or:"
    echo "  $0 $TREASURY_CAP_ID $AMOUNT $RECIPIENT 0xabc...package"
    exit 1
fi

# Calculate human-readable amount
HUMAN_AMOUNT=$(echo "scale=6; $AMOUNT / 1000000" | bc)

echo -e "${YELLOW}Parameters:${NC}"
echo "  Package ID: $PACKAGE_ID"
echo "  Treasury Cap ID: $TREASURY_CAP_ID"
echo "  Amount (raw): $AMOUNT"
echo "  Amount (USDT): $HUMAN_AMOUNT USDT"
echo "  Recipient: $RECIPIENT"
echo ""

echo -e "${GREEN}Minting USDT tokens...${NC}"

# Call the mint function
sui client call \
    --package "$PACKAGE_ID" \
    --module usdt \
    --function mint \
    --args "$TREASURY_CAP_ID" "$AMOUNT" "$RECIPIENT" \
    --gas-budget 10000000

echo ""
echo -e "${GREEN}✓ Successfully minted $HUMAN_AMOUNT USDT to $RECIPIENT${NC}"
echo ""
