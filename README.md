# Muhammad Umair — Portfolio

Personal portfolio for [Muhammad Umair](https://www.linkedin.com/in/mohammad-umair-um/), a Computer Science student in Lahore, Pakistan, building products for the web (React, TypeScript) and iOS (Swift, SwiftUI).

**Stack:** React 19 · TypeScript · Tailwind CSS 4 · Vite

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run lint     # oxlint
```

## Design system

Tokens live in `src/index.css` under `@theme` (Tailwind CSS 4):

- **Colors:** `paper`, `ink`, `soft`, `line`, `accent`
- **Type:** Hanken Grotesk (display) · Inter (body) · Geist Mono (labels)
- Shared classes: `.shell` (page container), `.label-mono`, `.btn-solid`, `.btn-outline`, `.tag`

## Roadmap

- [ ] Ship flagship project: shared expense splitter (React web app + SwiftUI app on a common Supabase backend)
- [ ] Ship job application tracker
- [ ] Add résumé download once CV is finalized
- [ ] Deploy (Vercel/Netlify) with SEO + social card pass
