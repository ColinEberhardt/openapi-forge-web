# OpenAPI Forge Web / Web

This is the web front-end for the OpenAPI Forge web client. It is a static site, hosted on GitHub.

## Development

Install dependencies:

~~~
npm install
~~~

Build, this will copy the static site into the `dist` folder:

~~~
npm run build
~~~

Then run a suitable server from the folder:

~~~
cd dist
live-server
~~~

## Deployment

The following command deploys to GitHub Pages:

~~~
npm run deploy
~~~