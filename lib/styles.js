import { StyleSheet } from "react-native";

export const COLORS = {
  RED: "#f38989",
  GREEN: "#78c1a3",
  BLUE: "#007FFF",
};

/**'
 * Helper for quick styling
 */
export const GlobalStyles = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  h2: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  h3: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  h4: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  h5: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  h6: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  p: {
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 24,
  },
  br: {
    height: 16,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});
