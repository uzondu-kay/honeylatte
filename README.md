# Honey And Latte Films

Static one-page site for Honey And Latte Films.

## Local preview

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

## Push to Git

After adding a remote repository:

```sh
git add .
git commit -m "Prepare Honey And Latte Films site for deployment"
git branch -M main
git push -u origin main
```
