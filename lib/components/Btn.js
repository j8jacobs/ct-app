import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { COLORS } from "../styles";

export default function Btn({
  title = "Submit",
  onPress,
  loading = false,
  ...rest
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 50,
        width: "100%",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: COLORS.BLUE,
        opacity: rest?.disabled || loading ? 0.5 : 1,
      }}
      {...rest}
    >
      <Text style={{ color: "white" }}>{title}</Text>
      {loading && <ActivityIndicator style={{ marginLeft: 8 }} />}
    </TouchableOpacity>
  );
}
