import { fetchUserDetail } from "@/app/actions";
import { UserDetailRouteProp } from "@/app/type/navigation";
import ErrorData from "@/components/ui/ErrorData";
import LoadingData from "@/components/ui/LoadingData";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

function UserDetail() {
  const route = useRoute<UserDetailRouteProp>();

  const { id } = route.params;

  console.log("ID: ", id);

  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.userDetail);

  useEffect(() => {
    if (id) {
      dispatch(fetchUserDetail(id));
    }
  }, [dispatch, id]);
  console.log("Data Detail: ", data);

  if (loading) return <LoadingData />;
  if (error && !loading) return <ErrorData error={error} />;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>ID: {data?.id}</Text>
      <Text>Name: {data?.name}</Text>
    </View>
  );
}

export default UserDetail;
