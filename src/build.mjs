import StyleDictionary from 'style-dictionary';

const BUILD_DIR = 'build-tokens/';

const sd = new StyleDictionary({
  log: {
    verbosity: 'verbose'
  },
  source: ['src/tokens/**/*.json'],
  prefix: 'rds-',
  platforms: {
    css: {
      prefix: 'rds-',
      transformGroup: 'css',
      buildPath: BUILD_DIR,
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            outputReferences: true
          }
        },
      ],
    },
    js: {
      transformGroup: "js",
      buildPath: '../build/',
      files: [
        {
          format: "javascript/es6",
          destination: 'tokens.js'
        }
      ]
    },
    json: {
      prefix: 'rds-',
      transformGroup: 'css',
      buildPath: BUILD_DIR,
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested',
          options: {
            outputReferences: true
          }
        },
      ],
    },
    flutter: {
      transformGroup: "flutter",
      buildPath: BUILD_DIR,
      files: [
        {
          destination: "style_dictionary.dart",
          format: "flutter/class.dart",
          options: {
            className: "StyleDictionary"
          }
        }
      ]
    }
  }
});

await sd.buildAllPlatforms();
