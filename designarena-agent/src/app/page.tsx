import Link from "next/link";

const highlights = [
  {
    title: "Context-aware assistance",
    description:
      "DesignArena Agent mirrors your open VS Code workspace, reads project context, and keeps responses scoped to the files you select.",
  },
  {
    title: "First-class design workflows",
    description:
      "Switch between product requirement, UX copy, and implementation modes so the agent adapts to whichever hat you are wearing.",
  },
  {
    title: "Secure by default",
    description:
      "All conversations stay in your private project enclave. Nothing leaves your workspace without an explicit publish step.",
  },
];

const integrations = [
  {
    name: "VS Code Extension",
    summary:
      "Install straight from the DesignArena Marketplace channel, authenticate with your workspace key, and you are ready to pair-program.",
    cta: {
      label: "Install from Marketplace",
      href: "https://designarena.app/extensions/vscode",
    },
  },
  {
    name: "DesignArena Cloud IDE",
    summary:
      "Launch a collaborative, browser-based IDE with the agent pre-wired, ideal for fast onboarding or live design crits.",
    cta: {
      label: "Open Cloud IDE",
      href: "https://designarena.app/cloud-ide",
    },
  },
  {
    name: "REST + WebSocket API",
    summary:
      "Trigger automations, sync context, and pipe completions into your internal tools using a simple agent orchestration API.",
    cta: {
      label: "View API Docs",
      href: "https://designarena.app/docs/agent-api",
    },
  },
];

const steps = [
  "Add the DesignArena Agent extension to VS Code and sign in with SSO or a workspace invite.",
  "Run `DesignArena: Link Project` from the command palette to sync your repository and local environment.",
  "Curate context using the sidebar: drop in files, specs, or figma links whenever you need them.",
  "Chat, generate code, or launch workflows. The agent keeps an audit trail you can share with your team.",
];

const faqs = [
  {
    question: "Do I need to switch editors?",
    answer:
      "No. The VS Code extension shares the exact agent core we ship in the DesignArena Cloud IDE, so you can stay in your preferred environment without losing capabilities.",
  },
  {
    question: "Is there an on-prem option?",
    answer:
      "Yes. Enterprise plans can self-host the agent runtime and connect through the same extension. Reach out to your account team for deployment guides.",
  },
  {
    question: "How is privacy handled?",
    answer:
      "Source files never leave your workspace boundary. Only the diffed snippets you explicitly send are processed, and retention policies are configurable per project.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" aria-hidden>
          <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500 blur-3xl" />
          <div className="absolute right-20 bottom-0 h-64 w-64 rounded-full bg-cyan-500 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-24">
          <div className="flex flex-col gap-10 text-center sm:text-left">
            <div className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 sm:self-start">
              DesignArena Agent
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Ship polished product experiences with an AI partner built for product teams.
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-300 sm:mx-0">
              The DesignArena Agent keeps designers, engineers, and product managers aligned. Integrate it directly into VS Code or use our cloud IDE\u2014the agent syncs context across both so you can ideate, critique, and build in one continuous flow.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://designarena.app/signup"
                className="inline-flex items-center justify-center rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:bg-purple-400"
              >
                Start free workspace trial
              </Link>
              <Link
                href="https://designarena.app/request-demo"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Talk to product specialist
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative mx-auto flex max-w-5xl flex-col gap-24 px-6 py-16">
        <section className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/20"
            >
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-lg shadow-black/30">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-white">Choose how you work with the agent</h2>
            <p className="text-sm text-slate-300">
              Bring the agent into your existing toolchain. Each integration preserves the same conversational memory, task planning, and automation hooks.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {integrations.map((integration) => (
              <article
                key={integration.name}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">{integration.name}</h3>
                  <p className="mt-2 text-sm text-slate-300">{integration.summary}</p>
                </div>
                <Link
                  href={integration.cta.href}
                  className="mt-auto inline-flex items-center text-sm font-semibold text-purple-300 hover:text-purple-200"
                >
                  {integration.cta.label}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-900/80 to-slate-950/90 p-10 shadow-2xl shadow-purple-500/20 md:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-white">Get started in under five minutes</h2>
            <p className="mt-3 text-sm text-slate-300">
              Everything you need to connect DesignArena Agent to your VS Code workspace.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-slate-200">
              {steps.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/70 text-sm font-semibold">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/5 bg-black/40 p-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-white">VS Code commands</h3>
              <p className="text-sm text-slate-300">
                After installation you&apos;ll see commands such as <code className="rounded bg-white/10 px-2 py-1">DesignArena: Chat</code>, <code className="rounded bg-white/10 px-2 py-1">DesignArena: Generate Test Plan</code>, and <code className="rounded bg-white/10 px-2 py-1">DesignArena: Review Pull Request</code>.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-white">Automation hooks</h3>
              <p className="text-sm text-slate-300">
                Build custom routines using GitHub Actions, Linear, or Slack. Triggers let the agent prep specs, announce releases, or spin up design reviews automatically.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-lg shadow-black/30">
            <h2 className="text-2xl font-semibold text-white">Roadmap highlights</h2>
            <p className="mt-3 text-sm text-slate-300">
              We ship improvements weekly. Here is what is already live and what is landing next.
            </p>
            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-purple-300">Now shipping</p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-200">
                  <li>Autonomous bug hunts with safekept remedial branches.</li>
                  <li>Design spec diffing with inline figma annotations.</li>
                  <li>Storybook regression sweeps before every handoff.</li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-purple-300">Next up</p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-200">
                  <li>JetBrains IDE support with shared conversation memory.</li>
                  <li>Voice-driven crit sessions with auto-generated summaries.</li>
                  <li>Native analytics on agent usage, coverage, and velocity.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-purple-500/30 bg-purple-500/10 p-10 shadow-xl shadow-purple-500/20">
            <div>
              <h2 className="text-2xl font-semibold text-white">Launch partner program</h2>
              <p className="mt-3 text-sm text-slate-200">
                Get early access to automation APIs, direct channel with our product team, and co-marketing slots in the DesignArena community.
              </p>
            </div>
            <Link
              href="https://designarena.app/partners"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Apply as partner
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-lg shadow-black/30">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-white">Frequently asked</h2>
              <p className="mt-3 text-sm text-slate-300">
                Everything teams usually ask during onboarding. Reach out to your account manager if you need a deeper technical write-up.
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <article key={faq.question} className="border-l border-white/10 pl-5">
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <p className="mt-2 text-sm text-slate-300">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto mb-16 flex max-w-5xl flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 px-8 py-10 text-sm text-slate-300 shadow-lg shadow-black/30 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">Ready to integrate DesignArena Agent?</p>
          <p className="mt-1 text-xs text-slate-400">
            Questions about security reviews or custom workflows? Your account team is a message away.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <Link
            href="mailto:team@designarena.app"
            className="text-sm font-semibold text-purple-200 hover:text-purple-100"
          >
            team@designarena.app
          </Link>
          <Link
            href="https://designarena.app/security"
            className="text-sm font-semibold text-purple-200 hover:text-purple-100"
          >
            Security Overview
          </Link>
        </div>
      </footer>
    </div>
  );
}
