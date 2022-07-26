import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const columns = [
  { field: "birthday", headerName: "Date of Birth ", width: 130 },
  { field: "sex", headerName: "Sex", width: 130 },
  { field: "bmi", headerName: "BMI", width: 130 },
  {
    field: "gestationalAge",
    headerName: "Age",
    width: 130,
  },
  { field: "weight", headerName: "Weight", width: 130 },
  { field: "height", headerName: "Height", width: 130 },
];
function DisplayList({ list }) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={list}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

export default DisplayList;
