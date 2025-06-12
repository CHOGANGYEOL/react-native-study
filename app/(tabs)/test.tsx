import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";

import { Alert, Button, Platform, StyleSheet } from "react-native";

export default function TestScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          // testtube.2
          name="0.circle"
          style={styles.headerImage}
        />
      }
    >
      <ThemedText>test7</ThemedText>
      <Button
        title="Alert Button"
        accessibilityLabel="test"
        onPress={() => {
          if (Platform.OS === "web") {
            window.alert("Alert Message");
          } else {
            Alert.alert("Alert Title", "Alert Message", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
            ]);
          }
        }}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
