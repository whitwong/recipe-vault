# recipe-vault
Recipe storage app

---
## Tech Stack
- Node.js v12.16.2
- Vercel (hosting)
- Next.js
- React
- Firebase/Firestore

---
## Default Next.js README
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


---
## 🔥 Firebase
2020-08-07: Decided to use firebase npm module. May come back to these instructions later.

Following this article [https://dev.to/benzguo/getting-started-with-next-js-now-firebase-4ejg](https://dev.to/benzguo/getting-started-with-next-js-now-firebase-4ejg)

Created `staging` and `production` projects in Firebase console.
### Firebase Staging 
Registered `staging` project, which created config variables that can be found under **Project Settings**
Created `.env.local` file to store Firebase staging environment variables.
### Firebase Production
**No info yet. Add later.**
### Firebase CLI
Install firebase tools: `npm install -g firebase-tools`
Login using Terminal: `firebase login`
Set aliases for Firebase projects:
  - `firebase use --add` (for Staging)
  - ```
    ? Which project do you want to add? project-name-staging
    ? What alias do you want to use for this project? (e.g. staging) staging
    ```
  - `firebase use --add` (for Production)
  - ```
    ? Which project do you want to add? project-name-production
    ? What alias do you want to use for this project? (e.g. staging) production
    ```
### Firebase Functions
Set up staging enviroment. Run following in Terminal:
```
$ firebase use staging
Now using alias staging (my-project-staging)

$ firebase functions:config:set app.environment="staging"
✔  Functions config updated.
```

Set up production environment. Run following in Terminal:
```
$ firebase use production
Now using alias production (my-project-production)

$ firebase functions:config:set app.environment="production"
✔  Functions config updated.
```