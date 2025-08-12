import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import NotFoundScreen from "./+not-found";
import HomeScreen from "./screens/Home";
import UserDetail from "./screens/user/[id]";
import { store } from "./store";
import { RootStack } from "./type/navigation";

const Stack = createNativeStackNavigator<RootStack>();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="UserDetail" component={UserDetail} />
          <Stack.Screen name="(+not-found)" component={NotFoundScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </ThemeProvider>
    </Provider>
  );
}
