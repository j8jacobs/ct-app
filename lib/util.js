// TODO should be fetched (rate on 4/16/24)
export const EXHANGE_RATE = 63275.2;

export const SATOSHI_PER_BTC = 100_000_000;

export function computeBTCFromSatoshi(satoshiBalance) {
  return satoshiBalance / SATOSHI_PER_BTC;
}

export function computeUSDFromSatoshi(
  satoshiBalance,
  usdPerBTC = EXHANGE_RATE
) {
  const btcAmount = computeBTCFromSatoshi(satoshiBalance); // Convert satoshi to BTC
  const usdValue = btcAmount * usdPerBTC; // Convert BTC to USD
  return parseFloat(usdValue.toFixed(2));
}

/**
 * Assumes Blockchain.com "id" format of {first4}-{last4} digit structure
 */
export function simplifyAddress(address) {
  return `${address.slice(0, 4)}-${address.slice(
    address.length - 4,
    address.length
  )}`;
}
