import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router/stack";
import { ModalPortal } from "react-native-modals";
import { WebSocketProvider } from "../lib/contexts/WebSocketProvider";

export default function Layout() {
  return (
    <WebSocketProvider>
      <StatusBar style="auto" />
      <Stack>
        {/* Remove title since stack header provides good safe area view */}
        <Stack.Screen name="index" options={{ headerTitle: "" }} />
      </Stack>
      <ModalPortal />
    </WebSocketProvider>
  );
}
