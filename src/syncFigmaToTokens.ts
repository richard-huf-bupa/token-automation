import 'dotenv/config'
import * as fs from 'fs'

import FigmaApi from './figma_api.js'

import { green } from './utils.js'
import { tokenFilesFromLocalVariables } from './token_export.js'

/**
 * Usage:
 *
 * // Defaults to writing to the tokens_new directory
 * npm run sync-figma-to-tokens
 *
 * // Writes to the specified directory
 * npm run sync-figma-to-tokens -- --output directory_name
 */

async function main() {
  if (!process.env.PERSONAL_ACCESS_TOKEN || !process.env.TOKENS_FILE_ID || !process.env.PALETTE_FILE_ID) {
    throw new Error('PERSONAL_ACCESS_TOKEN and TOKENS_FILE_ID environemnt variables are required')
  }
  const FILE_IDS = [
    process.env.TOKENS_FILE_ID,
    process.env.PALETTE_FILE_ID
  ];

  for (let fileId of FILE_IDS) {

    const api = new FigmaApi(process.env.PERSONAL_ACCESS_TOKEN)
    const localVariables = await api.getLocalVariables(fileId)

    const tokensFiles = tokenFilesFromLocalVariables(localVariables)

    let outputDir = 'tokens_new'
    // TODO: could remove
    const outputArgIdx = process.argv.indexOf('--output')
    if (outputArgIdx !== -1) {
      outputDir = process.argv[outputArgIdx + 1]
    }

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir)
    }

    Object.entries(tokensFiles).forEach(([fileName, fileContent]) => {
      fs.writeFileSync(`${outputDir}/${fileName}`, JSON.stringify(fileContent, null, 2))
      console.log(`Wrote ${fileName}`)
    })

    console.log(green(`✅ Tokens files have been written to the ${outputDir} directory`))
  }
}

main()
