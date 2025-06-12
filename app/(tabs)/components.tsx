import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, View } from "react-native";

export default function ComponentsScreen() {
  return (
    <ThemedView style={style.content}>
      <ThemedText type="title">Components</ThemedText>;
      <ThemedText type="subtitle">View</ThemedText>
      <View style={{ backgroundColor: "magenta", flex: 0.2 }} />
    </ThemedView>
  );
}
const style = StyleSheet.create({
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
