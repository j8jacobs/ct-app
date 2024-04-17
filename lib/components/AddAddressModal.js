import { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { Modal, ModalContent } from "react-native-modals";
import Input from "./Input";
import Btn from "./Btn";
import { validate } from "bitcoin-address-validation";
import { GlobalStyles } from "../styles";
import { router } from "expo-router";

// TODO: wrap modal in KeyboardAvoid
const KEYBOARD_ADJUSTMENT = 100;

export default function AddAddressModal({ adding, setAdding }) {
  const [address, setAddress] = useState();
  const { width } = useWindowDimensions();
  const [loading, setLoading] = useState(true);

  const routeToAddress = async () => {
    setAdding(false);
    setAddress("");
    router.push(`/address/${address}`);
  };

  return (
    <Modal
      visible={adding}
      onTouchOutside={() => setAdding(false)}
      width={width - 24}
      height={215}
      style={{ paddingBottom: 100 }}
    >
      <ModalContent
        style={{
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <View style={styles.modalHeader}>
          <Text style={GlobalStyles.h2}>Add Address</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Input
            placeholder="Input Bitcoin Address"
            onChangeText={setAddress}
            value={address}
          />
        </View>
        <Btn
          title="Add Address"
          onPress={routeToAddress}
          disabled={!validate(address) || loading}
          loading={loading}
        />
      </ModalContent>
    </Modal>
  );
}

const styles = StyleSheet.create({
  ctr: {
    marginBottom: KEYBOARD_ADJUSTMENT,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
