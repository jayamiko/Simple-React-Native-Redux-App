import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStack = {
  Home: undefined;
  UserDetail: { id: number };
  "(+not-found)": undefined;
};

export type HomeNavigationProps = NativeStackNavigationProp<RootStack, "Home">;
export type UserDetailRouteProp = RouteProp<RootStack, "UserDetail">;
