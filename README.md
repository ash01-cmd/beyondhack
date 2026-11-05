# Care Verified backend (Netlify Functions)

Add your `services_rows.json` (needs `id` and `name` per service) to `netlify/functions/lib/data/`. Without it the functions fail at build.

Endpoints:
- GET /api/services
- GET /api/search?service=Dialysis&district=&language=&q=&open24x7=1&hideUnavailable=1
- GET /api/facility?id=<uuid>

Copy `netlify/`, `netlify.toml` and `js/` into the repo root, commit to main. Netlify redeploys.
