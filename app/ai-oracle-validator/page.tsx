'use client';

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Link from "next/link";
import { useState } from "react";

type SectionId = 'overview' | 'staking' | 'rewards' | 'hardware' | 'installation' | 'faq';

export default function AIValidatorPage() {
  const [activeSection, setActiveSection] = useState<SectionId>('overview');

  const sections = [
    { id: 'overview' as SectionId, label: 'Overview', icon: '📖' },
    { id: 'staking' as SectionId, label: 'Staking Requirements', icon: '🦭' },
    { id: 'rewards' as SectionId, label: 'Rewards', icon: '💰' },
    { id: 'hardware' as SectionId, label: 'Hardware Requirements', icon: '🖥️' },
    { id: 'installation' as SectionId, label: 'Installation Guide', icon: '🦀' },
    { id: 'faq' as SectionId, label: 'FAQ', icon: '❓' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />

      {/* PoC Warning Banner */}
      <div className="bg-red-500 text-white p-3 border-b-4 border-red-700">
        <div className="max-w-7xl mx-auto flex items-center gap-3 px-4">
          <span className="text-xl">⚠️</span>
          <p className="text-sm">
            <strong>PoC Stage</strong> - This software is NOT READY for mainnet. Use only on <strong>TESTNET</strong>.
          </p>
        </div>
      </div>

      <div className="flex">
        {/* GitBook-style Sidebar */}
        <aside className="hidden lg:block w-72 min-h-[calc(100vh-120px)] bg-white dark:bg-gray-800 border-r-2 border-gray-200 dark:border-gray-700 sticky top-[76px] self-start">
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">AI Oracle Validator</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">Documentation & Setup Guide</p>

            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm font-medium transition-all ${
                    activeSection === section.id
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-l-4 border-purple-500'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span>{section.icon}</span>
                  <span>{section.label}</span>
                </button>
              ))}
            </nav>

            <div className="mt-8 p-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg text-white">
              <p className="text-xs font-medium mb-2">Ready to start?</p>
              <a
                href="https://form.typeform.com/to/DaHuofg7"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2 bg-white text-purple-700 rounded font-semibold text-sm hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </aside>

        {/* Mobile Tab Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-700 z-20 overflow-x-auto">
          <div className="flex">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex-1 min-w-[80px] flex flex-col items-center gap-1 px-3 py-3 text-xs font-medium transition-all ${
                  activeSection === section.id
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-t-2 border-purple-500'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                <span className="text-lg">{section.icon}</span>
                <span className="truncate">{section.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl mx-auto px-6 py-12 pb-24 lg:pb-12">

          {/* Overview Section */}
          {activeSection === 'overview' && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  Become an AI Oracle Validator
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Join the decentralized network of AI Oracle validators powering Walmarket&apos;s prediction market resolution.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-8 rounded-xl text-white">
                <h2 className="text-2xl font-bold mb-4">What is an AI Oracle Validator?</h2>
                <p className="mb-4">
                  AI Oracle Validators are the backbone of Walmarket&apos;s decentralized truth verification system.
                  They run Nautilus TEE nodes that execute AI inference in secure enclaves, providing cryptographically
                  verifiable market resolutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-xl">🔐</span>
                    <span>Run GPT-5 inference inside Trusted Execution Environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">📊</span>
                    <span>Aggregate data from multiple trusted sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">⛓️</span>
                    <span>Submit verified reports to the SUI blockchain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">💰</span>
                    <span>Earn rewards for accurate and timely resolutions</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-purple-200 dark:border-purple-700">
                  <h3 className="font-bold mb-2 text-gray-900 dark:text-white">📋 Responsibilities</h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Maintain 99.9% uptime</li>
                    <li>• Apply security patches promptly</li>
                    <li>• Monitor node performance</li>
                    <li>• Participate in governance</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-green-200 dark:border-green-700">
                  <h3 className="font-bold mb-2 text-gray-900 dark:text-white">✅ Benefits</h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Earn resolution fees</li>
                    <li>• Staking APY rewards</li>
                    <li>• Challenge bonuses</li>
                    <li>• Governance voting power</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Staking Section */}
          {activeSection === 'staking' && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  Staking Requirements
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Validators must stake Walrus (WAL) tokens to participate in the network.
                </p>
              </div>

              {/* Main Staking Card */}
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-8 rounded-xl text-white shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-5xl">🦭</div>
                  <div>
                    <h2 className="text-2xl font-bold">Required Stake</h2>
                    <p className="text-sm opacity-90">Mainnet validator requirements</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* KRW Value */}
                  <div className="bg-white/20 p-6 rounded-xl backdrop-blur">
                    <p className="text-sm opacity-80 mb-1">Fiat Value (KRW)</p>
                    <p className="text-4xl font-bold">~500M KRW</p>
                    <p className="text-sm opacity-80 mt-1">≈ $350,000 USD</p>
                  </div>

                  {/* WAL Amount */}
                  <div className="bg-white/20 p-6 rounded-xl backdrop-blur">
                    <p className="text-sm opacity-80 mb-1">WAL Token Amount</p>
                    <p className="text-4xl font-bold">~2,200,000 WAL</p>
                    <p className="text-sm opacity-80 mt-1">@ $0.16 per WAL</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <p className="text-xs opacity-80">
                    💡 Price reference: WAL token at ~$0.16 USD (Nov 2025). Actual requirement may vary based on market conditions.
                    Check <a href="https://coinmarketcap.com/currencies/walrus-xyz/" target="_blank" rel="noopener noreferrer" className="underline">CoinMarketCap</a> for current prices.
                  </p>
                </div>
              </div>

              {/* Testnet vs Mainnet */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-400">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🧪</span>
                    <h3 className="font-bold text-green-800 dark:text-green-300">Testnet</h3>
                  </div>
                  <p className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">1,000 WAL</p>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Minimal stake for testing. Get testnet tokens from faucet.
                  </p>
                  <div className="mt-4 px-3 py-1 bg-green-200 dark:bg-green-800 rounded text-xs font-medium text-green-800 dark:text-green-200 inline-block">
                    Available Now
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border-2 border-orange-400">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🚀</span>
                    <h3 className="font-bold text-orange-800 dark:text-orange-300">Mainnet</h3>
                  </div>
                  <p className="text-3xl font-bold text-orange-700 dark:text-orange-400 mb-2">~2.2M WAL</p>
                  <p className="text-sm text-orange-600 dark:text-orange-400">
                    Full stake required (~500M KRW worth).
                  </p>
                  <div className="mt-4 px-3 py-1 bg-orange-200 dark:bg-orange-800 rounded text-xs font-medium text-orange-800 dark:text-orange-200 inline-block">
                    Coming Soon
                  </div>
                </div>
              </div>

              {/* Why Stake & Slashing */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold mb-3 text-gray-900 dark:text-white">🎯 Why Stake?</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Staking ensures validators have skin in the game. Malicious or inaccurate reports
                    result in slashing penalties, incentivizing honest behavior and network security.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold mb-3 text-gray-900 dark:text-white">⚠️ Slashing Conditions</h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Invalid TEE attestations</li>
                    <li>• Hash mismatches</li>
                    <li>• Fabricated sources</li>
                    <li>• Consensus deviation</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Rewards Section */}
          {activeSection === 'rewards' && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  Validator Rewards
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Earn rewards for maintaining the network and providing accurate resolutions.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-teal-600 p-8 rounded-xl text-white">
                <h2 className="text-2xl font-bold mb-6">💰 Revenue Streams</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 p-5 rounded-lg border-2 border-white/30">
                    <div className="text-3xl mb-3">📊</div>
                    <h3 className="font-bold mb-2">Resolution Fees</h3>
                    <p className="text-sm opacity-90">
                      Earn a portion of market resolution fees for each successfully verified outcome.
                    </p>
                  </div>
                  <div className="bg-white/10 p-5 rounded-lg border-2 border-white/30">
                    <div className="text-3xl mb-3">📈</div>
                    <h3 className="font-bold mb-2">Staking APY</h3>
                    <p className="text-sm opacity-90">
                      Additional APY rewards from the protocol for maintaining active validator status.
                    </p>
                  </div>
                  <div className="bg-white/10 p-5 rounded-lg border-2 border-white/30">
                    <div className="text-3xl mb-3">🏆</div>
                    <h3 className="font-bold mb-2">Challenge Rewards</h3>
                    <p className="text-sm opacity-90">
                      Bonus rewards for successfully challenging invalid reports from other validators.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Estimated Returns (Projected)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 text-gray-600 dark:text-gray-400">Metric</th>
                        <th className="text-right py-3 text-gray-600 dark:text-gray-400">Conservative</th>
                        <th className="text-right py-3 text-gray-600 dark:text-gray-400">Optimistic</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-900 dark:text-white">
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3">Base Staking APY</td>
                        <td className="text-right">5%</td>
                        <td className="text-right">8%</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3">Resolution Fee Share</td>
                        <td className="text-right">3%</td>
                        <td className="text-right">7%</td>
                      </tr>
                      <tr className="font-bold">
                        <td className="py-3">Total Estimated APY</td>
                        <td className="text-right text-green-600">8%</td>
                        <td className="text-right text-green-600">15%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                  * Estimates based on projected network activity. Actual returns may vary.
                </p>
              </div>
            </div>
          )}

          {/* Hardware Section */}
          {activeSection === 'hardware' && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  Hardware Requirements
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Validators need TEE-capable hardware to run secure enclaves.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-purple-200 dark:border-purple-700">
                  <h3 className="font-bold mb-4 text-purple-900 dark:text-purple-300">🖥️ Minimum Specifications</h3>
                  <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-3">
                      <span className="text-purple-600 dark:text-purple-400 text-lg">•</span>
                      <span><strong>CPU:</strong> Intel SGX or AMD SEV capable</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-purple-600 dark:text-purple-400 text-lg">•</span>
                      <span><strong>RAM:</strong> 32 GB (64 GB recommended)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-purple-600 dark:text-purple-400 text-lg">•</span>
                      <span><strong>Storage:</strong> 500 GB NVMe SSD</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-purple-600 dark:text-purple-400 text-lg">•</span>
                      <span><strong>Network:</strong> 1 Gbps connection</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-purple-600 dark:text-purple-400 text-lg">•</span>
                      <span><strong>Uptime:</strong> 99.9% capability</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-green-200 dark:border-green-700">
                  <h3 className="font-bold mb-4 text-green-900 dark:text-green-300">🔐 Supported TEE Platforms</h3>
                  <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-3">
                      <span className="text-green-500 text-lg">✓</span>
                      <span>Nautilus TEE (Primary)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500 text-lg">✓</span>
                      <span>Intel SGX (via Gramine)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500 text-lg">✓</span>
                      <span>AMD SEV-SNP</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-yellow-500 text-lg">○</span>
                      <span>AWS Nitro Enclaves (Coming Soon)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h3 className="font-bold mb-3 text-blue-900 dark:text-blue-300">💡 Cloud Provider Options</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                  If you don&apos;t have TEE-capable hardware, consider these cloud providers:
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-200 dark:bg-blue-800 rounded text-sm text-blue-800 dark:text-blue-200">Azure Confidential Computing</span>
                  <span className="px-3 py-1 bg-blue-200 dark:bg-blue-800 rounded text-sm text-blue-800 dark:text-blue-200">Google Cloud Confidential VMs</span>
                  <span className="px-3 py-1 bg-blue-200 dark:bg-blue-800 rounded text-sm text-blue-800 dark:text-blue-200">AWS Nitro (Coming Soon)</span>
                </div>
              </div>
            </div>
          )}

          {/* Installation Section */}
          {activeSection === 'installation' && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  Installation Guide
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Step-by-step guide to set up your validator node using Rust CLI.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-2 border-yellow-400">
                <p className="text-yellow-800 dark:text-yellow-300 text-sm font-medium">
                  ⚠️ TESTNET ONLY - Do not use these commands on mainnet. This is experimental software.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-6">
                {/* Step 1 */}
                <div>
                  <h3 className="text-lg font-bold text-orange-400 mb-3">Step 1: Install Rust</h3>
                  <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code className="text-green-400">{`# Install Rust (if not already installed)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env

# Verify installation
rustc --version
cargo --version`}</code>
                  </pre>
                </div>

                {/* Step 2 */}
                <div>
                  <h3 className="text-lg font-bold text-orange-400 mb-3">Step 2: Install Walmarket Oracle CLI</h3>
                  <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code className="text-green-400">{`# Install walmarket-oracle from crates.io
cargo install walmarket-oracle --version 0.1.0-alpha

# Verify installation
walmarket-oracle --version`}</code>
                  </pre>
                </div>

                {/* Step 3 */}
                <div>
                  <h3 className="text-lg font-bold text-orange-400 mb-3">Step 3: Setup SUI Wallet</h3>
                  <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code className="text-green-400">{`# Install SUI CLI
cargo install --locked --git https://github.com/MystenLabs/sui.git sui

# Create new wallet (or import existing)
sui client new-address ed25519

# Switch to testnet
sui client switch --env testnet

# Get testnet SUI tokens from faucet
sui client faucet

# Verify wallet balance
sui client gas`}</code>
                  </pre>
                </div>

                {/* Step 4 */}
                <div>
                  <h3 className="text-lg font-bold text-orange-400 mb-3">Step 4: Configure Validator Node</h3>
                  <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code className="text-green-400">{`# Initialize configuration
walmarket-oracle init --network testnet

# Configure your wallet
walmarket-oracle config set-wallet --address <YOUR_SUI_ADDRESS>

# Set OpenAI API key for GPT-5 access
walmarket-oracle config set-api-key --openai <YOUR_OPENAI_KEY>

# Verify configuration
walmarket-oracle config show`}</code>
                  </pre>
                </div>

                {/* Step 5 */}
                <div>
                  <h3 className="text-lg font-bold text-orange-400 mb-3">Step 5: Register & Stake</h3>
                  <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code className="text-green-400">{`# Register as validator (testnet requires minimal stake)
walmarket-oracle register --stake 1000

# Check registration status
walmarket-oracle status

# Start the validator node
walmarket-oracle start --log-level info`}</code>
                  </pre>
                </div>

                {/* Step 6 */}
                <div>
                  <h3 className="text-lg font-bold text-orange-400 mb-3">Step 6: Monitor Your Node</h3>
                  <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code className="text-green-400">{`# View real-time logs
walmarket-oracle logs --follow

# Check validator metrics
walmarket-oracle metrics

# View pending resolution tasks
walmarket-oracle tasks list`}</code>
                  </pre>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-lg">
                <p className="text-blue-800 dark:text-blue-300 text-sm">
                  <strong>📚 Documentation:</strong> Full docs and source code at{' '}
                  <a href="https://github.com/getwalmarket/walmarket-oracle" className="underline hover:text-blue-600 dark:hover:text-blue-200">
                    github.com/getwalmarket/walmarket-oracle
                  </a>
                </p>
              </div>
            </div>
          )}

          {/* FAQ Section */}
          {activeSection === 'faq' && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  Frequently Asked Questions
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Common questions about becoming a validator.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    q: "Why is the staking requirement so high (~2.2M WAL)?",
                    a: "The high stake ensures validators have significant economic incentive to act honestly. It limits the validator set to serious participants who can maintain professional-grade infrastructure. This is crucial for maintaining network security and trust."
                  },
                  {
                    q: "Can I delegate my stake instead of running a node?",
                    a: "Yes! Users with WAL tokens can delegate to validators and earn a share of rewards. This allows participation in the network's economic security without running infrastructure yourself."
                  },
                  {
                    q: "What happens if my node goes offline?",
                    a: "Short outages result in missed rewards. Extended downtime (>24 hours) may trigger automatic unstaking and removal from the active validator set. It's crucial to maintain high uptime."
                  },
                  {
                    q: "How many validators are in the network?",
                    a: "The target is 21-100 active validators to balance decentralization with efficiency. The top staked validators are selected for the active set each epoch."
                  },
                  {
                    q: "When will mainnet launch?",
                    a: "Mainnet launch is planned after successful completion of testnet phase and security audits. Currently, only testnet is available. Join our waitlist for updates!"
                  },
                  {
                    q: "What's the minimum WAL I need to test on testnet?",
                    a: "Testnet requires only 1,000 WAL tokens which can be obtained free from the faucet. This allows anyone to test the validator experience before committing real funds."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                      Q: {item.q}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      A: {item.a}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-8 rounded-xl text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Ready to Join the Network?</h2>
                <p className="mb-6 opacity-90">
                  Apply to become an AI Oracle Validator and help build the future of decentralized truth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://form.typeform.com/to/DaHuofg7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Apply Now
                  </a>
                  <Link
                    href="/how-it-works"
                    className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      <Footer />
    </div>
  );
}
