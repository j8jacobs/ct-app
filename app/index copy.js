import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { router } from "expo-router";
import { GlobalStyles } from "../lib/styles";
import RoundBtn from "../lib/components/RoundBtn";
import { useState } from "react";
import AddAddressModal from "../lib/components/AddAddressModal";

export default function App() {
  const [adding, setAdding] = useState(false);

  return (
    <View style={styles.ctr}>
      <View style={styles.header}>
        <Text style={GlobalStyles.h1}>Wallet</Text>
        <RoundBtn txt="+" onPress={() => setAdding(true)} />
      </View>
      <AddAddressModal adding={adding} setAdding={setAdding} />
    </View>
  );
}

const styles = StyleSheet.create({
  ctr: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 24,
  },
});
