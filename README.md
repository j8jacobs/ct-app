# Welcome

React Native application that allows you to track and synchronize Bitcoin addresses with their public history.

## Overview

Simple 2 page application: home page and address details page
Home page has add button to manually input new addresses
Details page shows current balance in USD, with a list of up to 50 transactions

## Installation

1. `npm install`
2. Open ./lib/api.js and ensure BLOCKCHAIN_API_DEBUG to false
3. `npm start` | `npm run ios` | `npm run android`

## Testing

Jest snapshot testing

- `npm run test` TDD development (updated changes since main)
- `npm run testDebug` TDD development (all files)
- `npm run testFinal` Pre-deployment + Code coverage
