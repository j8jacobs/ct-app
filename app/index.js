import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { GlobalStyles } from "../lib/styles";
import RoundBtn from "../lib/components/RoundBtn";
import { useContext, useEffect, useState } from "react";
import AddAddressModal from "../lib/components/AddAddressModal";
import { WebSocketContext } from "../lib/contexts/WebSocketProvider";

const TEST = ["bc1q0sg9rdst255gtldsmcf8rk0764avqy2h2ksqs5"];

export default function App() {
  const [adding, setAdding] = useState(false);
  const [addresses, setAddresses] = useState(TEST);
  const { sendMessage, lastMessage } = useContext(WebSocketContext);

  useEffect(() => {
    for (let addr of addresses) {
      console.log(addr);
      sendMessage(
        // JSON.stringify({
        //   op: "addr_sub",
        //   addr,
        // })
        JSON.stringify({
          op: "ping",
        })
      );
    }
  }, [addresses]);

  useEffect(() => {
    console.log("res: ", lastMessage);
    if (lastMessage) {
      console.log(typeof lastMessage, JSON.parse(lastMessage.data));
    }
  }, [lastMessage]);

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
