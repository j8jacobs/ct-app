import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import {
  computeBTCFromSatoshi,
  computeUSDFromSatoshi,
  simplifyAddress,
} from "../util";
import { GlobalStyles } from "../styles";

export default function AddressCard({ address, final_balance }) {
  return (
    <TouchableOpacity
      style={styles.ctr}
      onPress={() => router.push(`/address/${address}`)}
    >
      <Text style={GlobalStyles.h4}>{simplifyAddress(address)}</Text>
      <View>
        <Text style={{ fontSize: 32 }}>
          {computeBTCFromSatoshi(final_balance)} BTC
        </Text>
        <Text>
          ${computeUSDFromSatoshi(final_balance).toLocaleString("en-US")}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ctr: {
    borderRadius: 8,
    // height: 200,
    flex: 1,
    margin: 12,
    padding: 12,
    borderWidth: 1,
  },
});
