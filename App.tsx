import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import  Widget  from "./src/components/Widget";
import { theme } from "./src/theme";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return (
      //@ts-ignore
      <AppLoading />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <StatusBar style="light" backgroundColor="transparent" translucent />
      
      
      <Widget />
    </View>
  );
}
