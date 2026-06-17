# Het Darshan Mehta Portfolio

Premium animated portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and lucide-react.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Easy Editing

Most portfolio content is in:

```text
app/portfolio-data.ts
```

Change these values there:

- `profile.name`
- `profile.heroName`
- `profile.tagline`
- `profile.headline`
- `profile.summary`
- `projects`
- `skills`
- `socialLinks`

## Files To Replace

Add your transparent cutout image:

```text
public/me.png
```

Add your resume PDF:

```text
public/resume.pdf
```

Update these placeholders in `app/portfolio-data.ts`:

- GitHub link: `https://github.com/your-username`
- LinkedIn link: `https://www.linkedin.com/in/your-profile`
- Email/contact details if they change

## Free GitHub Pages Hosting

This project includes `.github/workflows/deploy.yml`, which builds the portfolio as a static site and deploys it to GitHub Pages for free.

Steps:

1. Push this project to a GitHub repository.
2. In GitHub, open the repository settings.
3. Go to `Pages`.
4. Under `Build and deployment`, choose `GitHub Actions`.
5. Push to the `main` branch.
6. GitHub will publish the site and show the `github.io` link in the Pages settings.

For a repository named `your-username.github.io`, the site will publish at:

```text
https://your-username.github.io
```

For any other repository, the site will publish at:

```text
https://your-username.github.io/repository-name
```
