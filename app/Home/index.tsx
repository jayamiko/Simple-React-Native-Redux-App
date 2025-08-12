import DataTable from "@/components/table/DataTable";
import ErrorData from "@/components/ui/ErrorData";
import LoadingData from "@/components/ui/LoadingData";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { fetchUsers } from "../actions";
import { HomeNavigationProps } from "../types/navigation";

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<HomeNavigationProps>();

  const { data, loading, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <LoadingData />;
  if (error)
    return (
      <ErrorData error={error} handlePress={() => dispatch(fetchUsers())} />
    );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stepContainer}>
        <DataTable data={data} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A1CEDC",
    flex: 1,
    padding: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
