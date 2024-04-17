import { TouchableOpacity, Text } from "react-native";

export default function Pill({
  label,
  onPress,
  touchableOpacityProps = {},
  textProps = {},
}) {
  return (
    <TouchableOpacity onPress={onPress} {...touchableOpacityProps}>
      <Text {...textProps}>{label}</Text>
    </TouchableOpacity>
  );
}
