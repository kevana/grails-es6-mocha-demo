# Grails ES6 Mocha Demo

# ES2015
[babel-asset-pipeline](https://github.com/errbuddy/babel-asset-pipeline) transforms ES2015 files into ES5 and can output any module format you want (AMD, UMD, SystemJS).

## build.gradle (buildtime asset-pipeline config)
When the app is packaged for distribution the asset-pipeline config in build.gradle is used.

## application.yml (runtime asset-pipeline config)
When the app is run during development with `bootRun` or `run` this config is used.

## Javascript directory structure
Sources live in: `grails-app/assets/javascripts`
Tests live in: `src/test/javascript`

## Package.json
This tracks the NPM dependencies and contains the test command. The test command runs Mocha with the Babel compiler and sets NODE_PATH so tests in `src/test/javascript` can import modules that live in `grails-app/assets/javascripts`

## bridge.sh
Many libraries on NPM assume that projects use Webpack or Browserify to package dependencies for distribution with an app, they won't always provide UMD files in their distribution. There isn't an asset-pipeline plugin for Webpack or Browserify yet, this is my stopgap solution. It is a collection of Webpack commands to copy assets we want from `node_modules` into `grails-app/assets/javascripts/vendor`. The output in this directory is committed and as a result is visible to asset-pipeline during buildtime. This script only needs to be run when dependencies in package.json are updated.

# Javascript Unit Tests
The unit tests live in `src/test/javascript` and are run with Mocha on Node. They hook into gradle tasks with [gradle-node-plugin](https://github.com/srs/gradle-node-plugin) and run when the project's `test` task is run.

## .babelrc
This only controls Babel config for tests, babel-asset-pipeline still uses Babel 5 and doesn't look at this file.
