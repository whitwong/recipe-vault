# recipe-vault
Recipe storage app

---
## 🥞 Tech Stack
- Node.js v12.16.2
- Vercel (hosting)
- Next.js
- React
- Firebase / Firestore
- Chakra UI / React Icons

---
## Getting Started

1. First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the project. The page auto-updates as you edit the file.

2. If you haven't already, create a Firebase project in [Firebase Console](https://console.firebase.google.com/). Go to `Develop` --> `Database` --> `Create Database` and go through the prompts. Register the app by going to `Project Overview` and selecting the `Web` option. This will generate project keys that are need to connect to your Firestore. Keep the project keys handy to populate `.env.local` file (see next step).

3. Create `.env.local` file in project root with your Firestore credentials. See `.env` example for environmental variables needed to connect to Firestore. Make sure `.env.local` is included in your `.gitignore`.

---
### Useful References / Examples
- Next.js-blog-app: 
  - [Article](https://medium.com/swlh/lets-create-blog-app-with-next-js-react-hooks-and-firebase-backend-tutorial-7ce6fd7bbb3a)
  - [Git Repo](https://github.com/Devalo/Next.js-blog-app-)
- Firebase-with-react-hooks:
  - [Article](https://blog.logrocket.com/react-hooks-with-firebase-firestore/)
  - [Git Repo](https://github.com/briandesousa/firebase-with-react-hooks)

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