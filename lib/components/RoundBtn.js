import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { COLORS } from "../styles";

export default function RoundBtn({ txt, onPress, ...rest }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.ctr} {...rest}>
      <Text style={styles.txt}>{txt}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ctr: {
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.BLUE,
  },
  txt: {
    color: "white",
    fontSize: 24,
  },
});
