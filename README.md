# MPOC Website

## For future exec board members (no coding needed)

To add or edit an exec board member:
1. Go to `src/content/team/` in this GitHub repo
2. Click an existing file (like `president.md`) to see the format, or click "Add file" to create a new one
3. Fill in `name`, `role`, `order` (lower number = appears first) at the top, and write the bio below the `---` line
4. Commit your change — the site rebuilds and redeploys automatically within a minute or two

## For developers

- `npm install` then `npm run dev` to run locally at `localhost:4321`
- `npm run build` to build the static site to `dist/`
- Layout/design lives in `src/layouts/` and `src/components/` — content editors never need these
- Pushing to `main` auto-deploys via GitHub Actions (see `.github/workflows/deploy.yml`)
