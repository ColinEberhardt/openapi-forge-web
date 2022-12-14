# OpenAPI Forge Web / Server

This is the serverless back-end for the OpenAPI Forge web client. It is a simple AWS lambda back-end, with deployment via the [serverless framework](https://www.serverless.com/).

## Development

Install dependencies

~~~
npm install
~~~

You also need the serverless framework installed globally:

~~~
npm install serverless --global
~~~

The [serverless offline](https://www.npmjs.com/package/serverless-offline) plugin allows you to run the stack (lambda, API gateway) offline.

~~~
% serverless offline

Running "serverless" from node_modules
Starting Offline at stage dev (us-east-1)

Offline [http for lambda] listening on http://localhost:3002
Function names exposed for local invocation by aws-sdk:
           * generate: server-dev-generate

   ┌────────────────────────────────────────────────────────────────────────────┐
   │                                                                            │
   │   POST | http://localhost:3000/dev/generate                                │
   │   POST | http://localhost:3000/2015-03-31/functions/generate/invocations   │
   │                                                                            │
   └────────────────────────────────────────────────────────────────────────────┘
~~~

You can invoke the function as follows:

~~~
curl --request POST --data '{"language":"javascript"}' http://localhost:3000/dev/generate
~~~

Note, the lambda function will use the Swagger Pet Store schema if you do not define one.

## Deployment

Let serverless do its thing ...

~~~
serverless deploy
~~~
