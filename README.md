# Netlify GraphQL API

This is a **serverless GraphQL API** built with [Apollo Server](https://www.apollographql.com/docs/apollo-server/) and deployed using [Netlify Functions](https://docs.netlify.com/functions/overview/), which run on AWS Lambda under the hood.

---

## 🚀 Features

- ✅ Serverless deployment (auto-scaling, pay-per-request)
- ✅ GraphQL API powered by Apollo Server v4
- ✅ Hosted using Netlify Functions (AWS Lambda)
- ✅ Manual CORS handling for frontend compatibility
- ✅ Organized with ES Modules and modern JavaScript

---

## 📁 Project Structure

/functions
└── graphql.js # Serverless GraphQL handler
netlify/functions
└── graphql.js # Exported handler for netlify
/src/graphql
├── schema.js # GraphQL type definitions
└── resolvers.js # Resolver logic
netlify.toml # Netlify configuration
package.json # Project metadata and scripts

---

## 🛠 Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>
```
### 2. Install dependencies

## npm install

### 3. Link to Netlify (if not already linked)

## netlify login
## netlify link

### Development

## To run the serverless function locally:
   netlify dev

### Deployment

## To deploy to Netlify:
    netlify deploy --prod

    After deployment, access your API at:
    https://<your-site>.netlify.app/api/graphql

    Replace <your-site> with your actual Netlify site name.


### Author
Mihailo Stojkovic   