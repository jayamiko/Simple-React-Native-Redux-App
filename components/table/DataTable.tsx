import { HomeNavigationProps } from "@/app/types/navigation";
import { User } from "@/app/types/user";
import React from "react";
import { DataTable as PaperDataTable } from "react-native-paper";

interface DataTableProps {
  data: User[];
  navigation: HomeNavigationProps;
}

const DataTable = ({ data, navigation }: DataTableProps) => {
  return (
    <PaperDataTable>
      <PaperDataTable.Header>
        <PaperDataTable.Title style={{ flex: 0.5 }}>ID</PaperDataTable.Title>
        <PaperDataTable.Title>Nama</PaperDataTable.Title>
        <PaperDataTable.Title>Email</PaperDataTable.Title>
      </PaperDataTable.Header>

      {data.map((user: User) => (
        <PaperDataTable.Row
          key={user.id}
          onPress={() => navigation.navigate("UserDetail", { id: user.id })}
        >
          <PaperDataTable.Cell style={{ flex: 0.5 }}>
            {user.id}
          </PaperDataTable.Cell>
          <PaperDataTable.Cell>{user.name}</PaperDataTable.Cell>
          <PaperDataTable.Cell>{user.email}</PaperDataTable.Cell>
        </PaperDataTable.Row>
      ))}
    </PaperDataTable>
  );
};

export default DataTable;
