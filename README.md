# CivicKit

An open-source civic technology platform — six interconnected apps that make government transparent, voting accessible, rights understandable, journalism viable, and mutual aid scalable.

## Apps

| App | Port | Description |
|-----|------|-------------|
| **Showcase** | 3000 | Ecosystem hub and landing page |
| **CivicLens** | 3001 | Government activity feed + promise tracker |
| **BallotKit** | 3002 | Ballot lookup + voter registration |
| **RightsReady** | 3003 | Know-your-rights library + process navigator |
| **PressAgent** | 3004 | Document intelligence + story leads for journalists |
| **MutualAid OS** | 3005 | Community resource directory + volunteer coordination |

## Architecture

Turborepo monorepo with npm workspaces.

```
civickit/
├── apps/
│   ├── showcase/       # Next.js 16 — port 3000
│   ├── civiclens/      # Next.js 16 — port 3001
│   ├── ballotkit/      # Next.js 16 — port 3002
│   ├── rightsready/    # Next.js 16 — port 3003
│   ├── pressagent/     # Next.js 16 — port 3004
│   └── mutualaid-os/   # Next.js 16 — port 3005
├── packages/
│   ├── types/          # @civickit/types — shared TypeScript interfaces
│   └── ui/             # @civickit/ui — shared React component library
├── turbo.json
└── package.json
```

**Tech stack:** Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS 4, Turborepo

## Getting Started

```bash
npm install
npm run dev          # Start all apps via Turborepo
npm run dev:showcase # Or start individual apps
```

## Design Principles

- **WCAG 2.2 AA** accessibility minimum
- **6th-grade reading level** for all user-facing content
- **Anonymous first** — no account required for core features
- **Source transparency** — every data point cites its origin
- **Trauma-informed UX** — calm language, no dead ends, warm handoffs
- **Multi-language** — English, Spanish, Chinese, Arabic, Haitian Creole

## License

- `@civickit/*` packages: [MIT](LICENSE-MIT)
- Apps: [AGPL-3.0](LICENSE-AGPL)
