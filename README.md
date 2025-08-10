## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Access at: `https://<username>.github.io/portfolio`

Manual deployment:

```bash
npm run deploy
```

## Customization

Edit the following files to personalize:

- `/src/lib/sections/Hero.svelte` - Update name and title
- `/src/lib/sections/About.svelte` - Update bio and skills
- `/src/lib/sections/Work.svelte` - Update work experience
- `/src/lib/sections/Projects.svelte` - Update projects
- `/src/lib/sections/Contact.svelte` - Update contact info

## Tech Stack

- [Svelte](https://svelte.dev/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Motion One](https://motion.dev/) - Animations
- [GitHub Pages](https://pages.github.com/) - Hosting

## License

Whatever
