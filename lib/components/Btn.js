import { TouchableOpacity, Text } from "react-native";
import { COLORS } from "../styles";

export default function Btn({ title = "Submit", onPress, ...rest }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 50,
        width: "100%",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.BLUE,
        opacity: rest?.disabled ? 0.5 : 1,
      }}
      {...rest}
    >
      <Text style={{ color: "white" }}>{title}</Text>
    </TouchableOpacity>
  );
}
