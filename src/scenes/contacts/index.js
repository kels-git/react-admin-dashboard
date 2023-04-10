import * as React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";

const IndexContactsContainer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      editable: false,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      editable: false,
    },

    {
      field: "address",
      headerName: "Address",
      flex: 1,
      editable: false,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
      editable: false,
    },

    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
      editable: false,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      align: "center",
      headerAlign: "center",
      editable: false,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      editable: false,
    },
  ];
  return (
    <div>
      <Box m={"20px"} overflow={"auto"}>
        <Header
          title={"Contacts"}
          subTitle={"List of Contacts for future reference"}
        />

        <Box
          m={"40px 0 0 0"}
          height={"75vh"}
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            width: "100%",
            display: "table",
            tableLayout: "fixed",
          }}
        >
          <DataGrid
            rows={mockDataContacts}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Box>
    </div>
  );
};

export default IndexContactsContainer;
