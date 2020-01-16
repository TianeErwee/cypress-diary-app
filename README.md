GETTING CYPRESS IN:
> npm install -g @briebug/cypress-schematic
> npm install cypress --save-dev
> npm i -D  @briebug/cypress-schematic
> ng g @briebug/cypress-schematic:cypress true
> npm i -D ngx-build-plus
> npx cypress open
> Add coverage.webpack.js file to cypress folder:
	module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: 'istanbul-instrumenter-loader',
        options: { esModules: true },
        enforce: 'post',
        include: require('path').join(__dirname, '..', 'src'),
        exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/,
          /(ngfactory|ngstyle)\.js/
        ]
      }
    ]
  }
};
> Update Angular.json
	"serve": {
          "builder": "ngx-build-plus:dev-server",
          "options": {
            "browserTarget": "cypress-angular-coverage-example:build",
            "extraWebpackConfig": "./cypress/coverage.webpack.js"
          },
> npm i -D istanbul-instrumenter-loader
> npm i -D @istanbuljs/nyc-config-typescript source-map-support ts-node
> Add to package.json
	  "nyc": {
    "extends": "@istanbuljs/nyc-config-typescript",
    "all": true
  },
>  npm install -D @cypress/code-coverage nyc istanbul-lib-coverage
> Add to cypress/support/index.js
	import '@cypress/code-coverage/support'
> Add to cypress/plugins/index.js
	module.exports = (on, config) => {
  on('task', require('@cypress/code-coverage/task'))
}
> Add tsconfig.json to cypress folder
	{

  "extends": "../tsconfig.json",

  "include": ["integration/*.ts", "support/*.ts", "../node_modules/cypress"]

}

