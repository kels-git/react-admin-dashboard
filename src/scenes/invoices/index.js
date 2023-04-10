import * as React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import { DataGrid } from "@mui/x-data-grid";

const IndexInvoiceContainer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
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
      field: "cost",
      headerName: "Cost",
      flex: 1,
      editable: false,
      renderCell: (params)=> (
        <Typography color={colors.greenAccent[500]}>
          $ {params.row.cost}
        </Typography>
      )
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      editable: false,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      editable: false,
    },
  ];
  return (
    <Box m={"20px"} overflow={"auto"}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Header
          title={"INVOICES"}
          subTitle={"List of Invoice Balance"}
        />
      </Box>

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
          "& .MuiCheckbox-root":{
            color:`${colors.greenAccent[200]} !important`
          },
          width:"100%", display:"table", tableLayout:"fixed"
        }}
      >
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
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
  );
};

export default IndexInvoiceContainer;
