# Pro Erudio

## Pagini locale

Fiecare pagină accesibilă are propriul folder `src/pages/<nume>/index.tsx`, cu conținut JSX editabil. `src/data/pages.json` conține doar metadatele și asocierea dintre URL și folder; `src/data/route-aliases.json` păstrează adresele alternative. Pagina 404 se află în `src/pages/not-found`.

`ContentPageLayout` gestionează structura comună și galeriile. Meniul, subsolul și bara laterală rămân componente comune. Imaginile locale sunt în `src/assets`; imaginile găzduite pe site-ul anterior își păstrează URL-urile.

Build-ul nu importă pagini WordPress și nu descarcă HTML. `npm run build` compilează paginile React și generează HTML static și sitemap din aceleași componente. `npm run build:github` aplică și prefixul de găzduire GitHub Pages.

Au fost păstrate paginile accesibile din meniuri, carduri, liste extinse și linkurile din conținut. Arhivele automate, paginile de atașamente și paginile fără legături din interfață nu mai sunt publicate.

## Project info

**URL**: https://lovable.dev/projects/9cdc1373-5af8-4453-8032-5c36119fac0b

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/9cdc1373-5af8-4453-8032-5c36119fac0b) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/9cdc1373-5af8-4453-8032-5c36119fac0b) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
