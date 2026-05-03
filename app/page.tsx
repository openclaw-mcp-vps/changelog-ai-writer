export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Generate Changelogs from<br />
          <span className="text-[#58a6ff]">Git Commits Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your GitHub or GitLab repo. Our AI reads your commits and produces clean, categorized changelogs your users will actually understand.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $22/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to try. Cancel anytime.</p>
        <div className="mt-14 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left text-sm font-mono text-[#8b949e] overflow-x-auto">
          <p className="text-[#58a6ff] mb-2">// AI-generated changelog — v2.4.0</p>
          <p className="text-green-400">✦ New Features</p>
          <p className="ml-4">• Added dark mode support across all pages</p>
          <p className="ml-4">• Introduced CSV export for changelog entries</p>
          <p className="text-yellow-400 mt-2">⚠ Bug Fixes</p>
          <p className="ml-4">• Fixed pagination on the dashboard view</p>
          <p className="ml-4">• Resolved token refresh race condition</p>
          <p className="text-[#8b949e] mt-2">↻ Improvements</p>
          <p className="ml-4">• Improved commit parsing for merge commits</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl border border-[#58a6ff] bg-[#161b22] p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$22</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited repos",
              "AI-powered changelog generation",
              "GitHub & GitLab integration",
              "Categorized entries (features, fixes, improvements)",
              "Export to Markdown, HTML, JSON",
              "Custom branding",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <p className="font-semibold text-white mb-2">Which Git providers are supported?</p>
            <p className="text-[#8b949e] text-sm">GitHub and GitLab are fully supported. You authenticate via OAuth and select any repo you have access to.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <p className="font-semibold text-white mb-2">How does the AI categorize commits?</p>
            <p className="text-[#8b949e] text-sm">We use OpenAI to analyze commit messages and diffs, then group them into Features, Bug Fixes, and Improvements — following conventional commit conventions when available.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <p className="font-semibold text-white mb-2">Can I edit the generated changelog before publishing?</p>
            <p className="text-[#8b949e] text-sm">Yes. Every generated changelog is fully editable in a rich text editor before you export or publish it.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-10">
        © {new Date().getFullYear()} Changelog AI Writer. All rights reserved.
      </footer>
    </main>
  );
}
