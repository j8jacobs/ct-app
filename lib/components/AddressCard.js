import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function AddressCard({ address }) {
  return (
    <TouchableOpacity
      style={styles.ctr}
      onPress={() => router.push(`/address/${address}`)}
    >
      <Text>{address}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ctr: {
    borderRadius: 8,
    height: 200,
    flex: 1,
    backgroundColor: "red",
    margin: 12,
    padding: 12,
  },
});
