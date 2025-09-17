import StyleDictionary from 'style-dictionary';

const BUILD_DIR = 'dist/';

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
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true
          }
        },
      ],
    },
    js: {
      transformGroup: "js",
      buildPath: BUILD_DIR,
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
          destination: "tokens.dart",
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
