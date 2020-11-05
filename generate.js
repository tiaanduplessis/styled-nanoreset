#!/usr/bin/env node

const path = require('path')
const fs = require('fs')

const readLocation = path.join(process.cwd(), 'node_modules', 'nanoreset', 'nanoreset.css')
const writeLocation = path.join(process.cwd(), 'src', 'index.js')
const resetContent = fs.readFileSync(readLocation, 'utf-8')

const newFile = `
import { css, createGlobalStyle } from 'styled-components'

export const nanoreset = css\`
${resetContent}
\`

export const NanoReset = createGlobalStyle(nanoreset)

export default nanoreset
`

fs.writeFileSync(writeLocation, newFile)
