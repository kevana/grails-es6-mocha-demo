# Grails ES6 Mocha Demo


# Unit tests
Fast, run on Node
Hook into gradle pipeline with node gradle plugin and `test.dependsOn = npmTest`

# babel-asset-pipeline, deliver modules in whatever format you want (AMD, UMD, SystemJS)


## build.gradle (buildtime asset-pipeline config)

## application.yml (runtime asset-pipeline config)

## Package.json
Running Mocha with Babel compiler, setting NODE_PATH.

What about npm dependencies? Put Webpack commands in a script to copy them from node_modules into grails-app/assets/javascripts/vendor, now it's in the asset-pipeline world.

## .babelrc
Only controls Babel config for tests, babel-asset-pipeline still uses Babel 5 and doesn't look at this file.

## Directory structure
Sources live in: `grails-app/assets/javascripts`
Tests live in: `src/test/javascript`
