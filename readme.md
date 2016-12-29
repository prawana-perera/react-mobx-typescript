# Description
In this project, my goal was to learn state management for React application using the MobX library. In addition to learning about the state management aspect, my goals are to produce more than a "HelloWorld" application, and actually create a more of a "real life" application. Therefore my learning goals and activities are:

* Use automated build pipeline, produce two modes of operation, 1 development and 1 for production asset build (to be deployed into non development environments)
* Hot reloading so that code changes are automatically reloaded without having to refresh the browser
* Call backend REST API to perform CRUD operations
* More than a single "page", an application with multiple routes
* Allow the code to scale in a multi developer or larger application code bases, use IDE autocompletion as well as static compilation to avoid developer errors and ease of refactoring as your code base grows
* Implement unit and integration testing as well as the maintainability of such tests
* Enforce code style so the code base changes are inline with personal or organisations expectations/standards

# Setup

## Pre-requisites

### NodeJS and NPM
Ensure that NodeJS is installed. This project was created using the following version:

```
C:\>npm -version
> 3.5.1

C:\>node --version
> v6.9.1
```

## Install TypeScript

Install TypeScript globally using this command:

```npm install -g typescript```

## Run Application
1. Clone the repository
2. CD to directory
3. Run `npm install`

## Development Mode
Run `npm start` to start the application in development mode. Then navigate to http://localhost:3000/.

## Production Build
Run `npm run build`. This will create the assets required to host the static site (i.e. in NginX, Apache etc). See the `dist` directory for the list of assets produced. These will need to be published to where ever you will be hosting the site from.

# References
* https://www.typescriptlang.org/docs/handbook/react-&-webpack.html (Get familiar with TS) 
* https://github.com/mobxjs/mobx-react-typescript-boilerplate (A quick start)
* http://blog.tomduncalf.com/posts/setting-up-typescript-and-react/#adding-hot-module-reloading (A comprehensive reference and most of the config used from this)
* https://webpack.js.org/guides/production-build/ (Learn about how to optimise your webpack generated assets for production deployments)
* https://webpack.github.io/docs/code-splitting.html#split-app-and-vendor-code (Split JS bundles)
* TBA

