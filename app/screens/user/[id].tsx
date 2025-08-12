import { fetchUserDetail } from "@/app/actions";
import { UserDetailRouteProp } from "@/app/types/navigation";
import ErrorData from "@/components/ui/ErrorData";
import ItemNotFound from "@/components/ui/ItemNotFound";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UserDetail() {
  const route = useRoute<UserDetailRouteProp>();
  const { id } = route.params;

  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.userDetail);

  useEffect(() => {
    dispatch(fetchUserDetail(id));
  }, [dispatch, id]);

  if (!data && !loading) {
    return <ItemNotFound />;
  }

  if (error) {
    return (
      <ErrorData
        error={error}
        handlePress={() => dispatch(fetchUserDetail(id))}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Detail</Text>
      <Text>ID: {data?.id}</Text>
      <Text>Name: {data?.name}</Text>
      <Text>Email: {data?.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
