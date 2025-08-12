import { HomeNavigationProps } from "@/app/type/navigation";
import { User } from "@/app/type/user";
import React from "react";
import { ScrollView, Text } from "react-native";
import { DataTable } from "react-native-paper";

type Props = {
  data: User[];
  navigation: HomeNavigationProps;
};

const cellStyle = {
  width: 150,
  paddingHorizontal: 8,
};

function UserTable({ data, navigation }: Props) {
  const keys: string[] = data && data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <ScrollView horizontal>
      <DataTable>
        <DataTable.Header>
          {keys?.map((key: string, i: number) => {
            return (
              <DataTable.Title
                key={i}
                style={key === "id" ? { width: 20 } : { width: 120 }}
              >
                <Text style={{ textAlign: "left" }}>{key}</Text>
              </DataTable.Title>
            );
          })}
        </DataTable.Header>

        {data.map((item: User) => {
          const { address, company }: User = item;
          return (
            <DataTable.Row
              key={item.id}
              onPress={() => navigation.navigate("UserDetail", { id: item.id })}
            >
              <DataTable.Cell>{item.id}</DataTable.Cell>
              <DataTable.Cell style={cellStyle}>{item.name}</DataTable.Cell>
              <DataTable.Cell style={cellStyle}>{item.username}</DataTable.Cell>
              <DataTable.Cell style={cellStyle}>{item.email}</DataTable.Cell>
              <DataTable.Cell style={cellStyle}>
                Street: {address.street}
                Suite: {address.suite}
                City: {address.city}
                Zipcode: {address.zipcode}
              </DataTable.Cell>
              <DataTable.Cell style={cellStyle}>{item.phone}</DataTable.Cell>
              <DataTable.Cell style={cellStyle}>{item.website}</DataTable.Cell>
              <DataTable.Cell style={cellStyle}>
                Name: {company.name}
                catchPhrase: {company.catchPhrase}
                bs: {company.bs}
              </DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
    </ScrollView>
  );
}

export default UserTable;
