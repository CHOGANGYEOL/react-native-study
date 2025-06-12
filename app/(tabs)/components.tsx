import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Divide } from "@/components/ui/Divide";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ComponentsScreen() {
  return (
    <ThemedView style={style.content}>
      <ThemedText type="title">Components</ThemedText>;
      <ThemedText type="subtitle">View</ThemedText>
      <View style={{ backgroundColor: "magenta", height: 100 }} />
      <Divide />
      <ThemedText type="subtitle">Text</ThemedText>
      <Text style={style.text}>{"Text Component"}</Text>
      <Divide />
      <ThemedText type="subtitle">Image</ThemedText>
      <Image
        style={{
          aspectRatio: 1 / 1,
        }}
        source={{
          uri: "https://picsum.photos/200",
          width: 200,
        }}
      />
      <Divide />
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
  text: {
    color: "white",
  },
});
