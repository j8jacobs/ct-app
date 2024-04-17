import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../lib/styles";

// some of the fields available: hash, size, weight, fee, lock_time, tx_index, double_spend, time, block_index, block_height, inputs, outputs
// A bit of confusion understanding whether the transaction is incoming or outgoing (and pending vs complete):
// I'll assume if the address is in inputs, it's outgoing. If it's not, it's an BTC recieved tx
export default function Tx({ hash, result, block_index }) {
  const confirmed = !!block_index;
  const incoming = result >= 0; //!!out.find((t) => t.addr === address);
  const Icon = () => {
    const backgroundColor = incoming ? COLORS.GREEN : COLORS.RED;
    return (
      <View style={[styles.iconCtr, { backgroundColor }]}>
        <Text>{confirmed ? "C" : "P"}</Text>
      </View>
    );
  };
  return (
    <View style={styles.ctr}>
      <Icon />
      <Text>ID: {hash.slice(0, 4)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ctr: {
    paddingHorizontal: 12,
    paddingVertical: 24,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  iconCtr: {
    borderRadius: 50,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
