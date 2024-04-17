import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { GlobalStyles } from "../lib/styles";
import RoundBtn from "../lib/components/RoundBtn";
import { useContext, useEffect, useState } from "react";
import AddAddressModal from "../lib/components/AddAddressModal";
import { WebSocketContext } from "../lib/contexts/WebSocketProvider";
import { getAddressData, getAddresses } from "../lib/api";
import AddressCard from "../lib/components/AddressCard";

const TEST = ["bc1q0sg9rdst255gtldsmcf8rk0764avqy2h2ksqs5"];

export default function App() {
  const [adding, setAdding] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const { sendMessage, lastMessage } = useContext(WebSocketContext);

  // can't subscribe while API credits are out
  // useEffect(() => {
  //   for (let addr of addresses) {
  //     console.log(addr);
  //     sendMessage(
  //       JSON.stringify({
  //         op: "addr_sub",
  //         addr,
  //       })
  //     );
  //   }
  // }, [addresses]);

  // useEffect(() => {
  //   if (lastMessage) {
  //     console.log(typeof lastMessage, JSON.parse(lastMessage.data));
  //   }
  // }, [lastMessage]);

  useEffect(() => {
    const load = async () => {
      try {
        const addressList = await getAddresses();
        const addressData = await Promise.all(
          addressList.map((a) => getAddressData(a))
        );
        setAddresses(addressData);
      } catch (e) {
        console.error("Error loading cards: ", e);
        alert("Error loading cards. Please try again later.");
      }
    };
    load();
  }, []);

  return (
    <View style={styles.ctr}>
      <View style={styles.header}>
        <Text style={GlobalStyles.h1}>Wallet</Text>
        <RoundBtn txt="+" onPress={() => setAdding(true)} />
      </View>
      <ScrollView>
        {addresses.map((a, i) => (
          <AddressCard key={`address_${i}`} {...a} />
        ))}
      </ScrollView>
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
