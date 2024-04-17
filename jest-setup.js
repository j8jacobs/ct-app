import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

jest.mock("expo-router", () => {
  return {
    ...jest.requireActual("expo-router"), // This line ensures that you're using the actual implementations of other exports from expo-router
    useLocalSearchParams: jest.fn(),
    useFocusEffect: jest.fn().mockImplementation((callback) => {
      // Optional: you can simulate the effect's callback if necessary
      // callback();
    }),
    Stack: {
      ...jest.requireActual("expo-router").Stack,
      Screen: () => "MockScreen", // Mock implementation of Screen
    },
  };
});

jest.mock("react-native-modals", () => ({
  ModalPortal: () => "ModalPortal", // Return a dummy component
  // Mock other components or exports if necessary
  ModalContent: () => <></>,
  Modal: () => <></>,
  // ...jest.requireActual("react-native-modals"),
}));
