// rate on 4/16/24
// TODO - compute
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
