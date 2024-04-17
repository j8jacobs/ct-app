import AsyncStorage from "@react-native-async-storage/async-storage";

// ---- Address API

export const ADDRESSES_KEY = "addresses";

export async function getAddresses() {
  const addresses = await AsyncStorage.getItem(ADDRESSES_KEY);
  return addresses ?? [];
}

export async function addAddress(address) {
  const addresses = await getAddresses();
  const newAddresses = [address, ...addresses];
  await AsyncStorage.setItem(ADDRESSES_KEY, newAddresses);
  return newAddresses;
}

export async function removeAddress(address) {
  const addresses = await getAddresses();
  const newAddresses = addresses.filter((a) => a !== address);
  await AsyncStorage.setItem(ADDRESSES_KEY, newAddresses);
  return newAddresses;
}

// ---- Blockchain API
const DEBUG = true; // ran out of requests

export async function getAddressData(address) {
  if (DEBUG) {
    return {
      address,
      n_tx: 17,
      n_unredeemed: 2,
      total_received: 1031350000,
      total_sent: 931250000,
      final_balance: 100100000,
      txs: [],
    };
  }
  const res = await fetch(`https://blockchain.info/rawaddr/${address}`);
  const data = await res.json();
  return data;
}
