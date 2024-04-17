import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { computeUSDFromSatoshi } from "../../lib/util";
import Tx from "./Tx";
import { getAddressData } from "../../lib/api";

export default function AddressPage() {
  const { address, final_balance, n_tx } = useLocalSearchParams();
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(final_balance);
  const [totalTxs, setTotalTxs] = useState(n_tx);
  const [txs, setTxs] = useState();

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    setLoading(true);
    try {
      const data = await getAddressData(address);
      setBalance(data.final_balance);
      setTotalTxs(data.n_tx);
      setTxs(data.txs);
    } catch (e) {
      console.error("Error fetching data: ", e);
    }
    setLoading(false);
  };

  if (loading && final_balance == undefined) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.ctr}>
      <Stack.Screen
        options={{
          title: `${address.slice(0, 4)}-${address.slice(
            address.length - 4,
            address.length
          )}`,
        }}
      />
      <View style={styles.balanceCtr}>
        <Text style={styles.balance}>
          ${computeUSDFromSatoshi(balance).toLocaleString("en-US")}
        </Text>
      </View>
      <View style={styles.txCtr}>
        <View style={styles.txTable}>
          <FlatList
            data={txs}
            renderItem={({ item }) => (
              <Tx
                key={item.hash}
                address={address}
                hash={item.hash}
                result={item.result}
                block_index={item.block_index}
              />
            )}
            refreshing={loading}
            onRefresh={load}
            initialNumToRender={5}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ctr: {
    flex: 1,
  },
  balanceCtr: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  balance: {
    fontSize: 32,
  },
  txCtr: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  txTable: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
  },
});
