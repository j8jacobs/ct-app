# Welcome

React Native application that allows you to track and synchronize Bitcoin addresses with their public history.

## Architecture Attempt

1. Addresses stored locally with AsyncStorage
2. Page transitions fetch data via REST endpoint; REST endpoint is hit when list is pulled for refresh
3. (Unimplemented) Websocket API is used to maintain realtime updates across all monitored addresses

## Assumptions

1. "Synchonrized" list means most recent balance and transaction information
2. User will have network access

\*\*NOTE: Lack of Bitcoin familiarity was my toughest obstacle. I spent too much time trying to verify my understanding of the data, APIs and fighting with value descrepancies. In hindsight, I should have simply aimed to more closely resemble cointracker representation of the data I did not understand and honed my efforts in on simply collecting and managing addresses.

## Overview

Simple 2 page application: home page and address details page
Home page has add button to manually input new addresses
Details page shows current balance in USD, with a list of up to 50 transactions

Details page can syncronize values via list pull down and remove the item from your collected addresses

\*\*NOTE: bitcoin USD conversion rate is currently hardcoded and should be fetched every update with REST endpoint or the Blockchain.com Exchange websocket API to keep track of BTC-USD conversions in real time.

Blockchain API blocked my requests late into my attempt, so I stubbed the request in ./lib/api.js (BLOCKCHAIN_API_DEBUG).

## Part 1

a) [Figma Sketches](https://www.figma.com/file/K5ZShjMbM886eajezkJ9dU/Coin-Tracker-Takehome-assessment?type=design&node-id=0%3A1&mode=design&t=OcbkeK1s08NVfZk9-1)
b) High Level Components

- Storage: List of strings stored locally (data will be fetched on the fly, no offline caching in this version)
- Data: [blockchain.info API](https://www.blockchain.com/explorer/api/blockchain_api). Address is the key returning all necessary and relevant info from the single and multi-address transaction endpoints (/rawaddr/$bitcoin_address and /multiaddr?active=$address|$address)
- Routing/seperation of functionalities: One page for listing, on page for viewing specific addresses
  c) Simple array since data will be fetched whenever available

## Installation

1. `npm install`
2. Open ./lib/api.js and ensure BLOCKCHAIN_API_DEBUG to false
3. `npm start` | `npm run ios` | `npm run android`

## Testing

Jest snapshot testing

- `npm run test` TDD development (updated changes since main)
- `npm run testDebug` TDD development (all files)
- `npm run testFinal` Pre-deployment + Code coverage
