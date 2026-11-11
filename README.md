# Honey And Latte Films

Static one-page site for Honey And Latte Films.

## Local preview yes

```sh
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Deploy to Vercel

This is a buildless static site. From the project directory:

```sh
npx vercel
```

For a production deployment:

```sh
npx vercel --prod
```

When prompted, use the current directory as the project root and choose the default settings. No build command or output directory is required.

## Unlisted collaboration page

The direct-only collaboration deck is intended to be available at:

`/collab/`

It is intentionally absent from the main page, footer and sitemap, and uses both a `noindex` meta tag and Vercel `X-Robots-Tag` headers. It is unlisted, not password-protected: anyone with the URL can view it.

Once the custom domain is connected in Vercel, the intended URL is `https://madebyhalf.com/collab`. Static hosting may also serve the same route on any other domain attached to the Vercel project; restricting it to one host would require an access-control or host-checking layer.

The page loads Vercel Web Analytics only after the visitor actively allows analytics cookies. Enable Web Analytics for the Vercel project to see page visits and traffic for the private route in the Vercel dashboard.

## Push to Git

After adding a remote repository:

```sh
git add .
git commit -m "Prepare Honey And Latte Films site for deployment"
git branch -M main
git push -u origin main
```
