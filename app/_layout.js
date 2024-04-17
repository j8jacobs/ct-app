import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router/stack";
import { useLocalSearchParams } from "expo-router";
import { ModalPortal } from "react-native-modals";

export default function Layout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "" }} />
      </Stack>
      <ModalPortal />
    </>
  );
}
