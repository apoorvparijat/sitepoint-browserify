## Installation

Install project dependecies by running

`npm install`

## Complile/watch JS files using

##### Browserify

Install `browserify` globally by running `npm install browserify -g`

```
browserify js/main.js -o build/output.js -d
```

##### npm

```
npm run build-js
npm run watch-js
```

##### Grunt

Install `grunt` globally by running `npm install grunt -g`

```
grunt browserify
grunt watch
```

##### Gulp

Install `gulp` globally by running `npm install gulp -g`

```
gulp browserify
gulp watch
```
