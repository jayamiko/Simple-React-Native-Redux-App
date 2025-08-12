import UserTable from "@/components/ui/UserTable";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { fetchUsers } from "../actions";
import { HomeNavigationProps } from "../type/navigation";

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProps>();

  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stepContainer}>
        <UserTable data={data} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
