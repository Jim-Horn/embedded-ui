# 🧑‍💻 Gatsby / Contentful - Embedded UI Demo and Development Environment

## 🛠️ Setup

### Repo setup

1. Clone the repo to your local system: `git clone git@github.com:asurion-private/embedded-ui.git`
1. Run `yarn` to install the project's dependencies
1. Follow the Env setup instructions (below)
1. Run `yarn start` to spin up the local development server

### Env setup

Copy `example.env` to `.env`, then in that file update the following:

1. If you have a Contentful environment, update the `CONTENTFUL_SPACE_ID` AND `CONTENTFUL_ACCESS_TOKEN`s with the appropriate values. (If no space id is provided, the Contentful plugin won't be loaded)

## 🔬 More information

For more information on Contentful and GatsbyJS, [check out this document](./docs/contentful-gatsby.md)
