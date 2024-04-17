import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { computeUSDFromSatoshi, simplifyAddress } from "../../lib/util";
import Tx from "../../lib/components/Tx";
import { getAddressData, removeAddress } from "../../lib/api";
import { Ionicons } from "@expo/vector-icons";

export default function AddressPage() {
  const { address, final_balance, n_tx } = useLocalSearchParams();
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(final_balance);
  const [totalTxs, setTotalTxs] = useState(n_tx);
  const [txs, setTxs] = useState();
  const [displayOpts, setDisplayOpts] = useState(false);

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

  const onRemoveAddress = async () => {
    const msg = `Are you sure you would like to remove this addresses from your watch list?`;
    Alert.alert("Remove Address", msg, [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: async () => {
          await removeAddress(address);
          router.back();
        },
      },
    ]);
  };

  if (loading && final_balance == undefined) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.ctr}>
      <Stack.Screen
        options={{
          title: simplifyAddress(address),
        }}
      />
      <View style={styles.balanceCtr}>
        <Text style={styles.balance}>
          ${computeUSDFromSatoshi(balance).toLocaleString("en-US")}
        </Text>
        <View
          style={{
            position: "absolute",
            right: 12,
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Ionicons
            name="remove-circle"
            size={24}
            color="black"
            onPress={onRemoveAddress}
          />
        </View>
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
    position: "relative",
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
