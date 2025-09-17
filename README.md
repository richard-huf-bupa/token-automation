# Figma variables automation

This POC uses the Figma API to import Figma Variables to style dictionary format, and outputs them as Design Tokens.

## Prerequisites

Node v22.12.0

## Getting started

Create a `.env` file in the root directory, with the following:

```
TOKENS_FILE_ID=JXHwgvlFgXvzxppKGeXQQR
PALETTE_FILE_ID=RMR3w43uohDE2JcSQNFTWJ
PERSONAL_ACCESS_TOKEN=
```

The Tokens File ID will enable exporting semantic Design tokens from the new Figma Variables file: https://www.figma.com/design/JXHwgvlFgXvzxppKGeXQQR
Pallete file ID enables exporting the palette colors. You'll need to supply your own Figma personal access token.

```
yarn
```

### Import and build design tokens:

```
yarn tokens:build
```

This imports the Figma variables in the raw JSON format used by [style dictionary](https://styledictionary.com/). These are found in:

- `src/tokens/color`
- `src/tokens/palette`

It also generates the design tokens in the `dist` directory. Tokens are built in the following formats:

- CSS variables
- Javascript
- Flutter (dart)
- JSON
