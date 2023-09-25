import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'sourceOrderLineId', headerName: 'Source Order Line ID', width: 200, headerAlign: 'center', },
  { field: 'materialId', headerName: 'Material ID', width: 200, headerAlign: 'center', },
  { field: 'requestedQty', headerName: 'Requested Quantity', width: 200, headerAlign: 'center', },
  { field: 'requestedQtyUom', headerName: 'Requested Quantity UOM', width: 200, headerAlign: 'center', },
  { field: 'unitPriceAmount', headerName: 'Unit Price Amount', width: 200, headerAlign: 'center', },
  { field: 'totalGrossAmount', headerName: 'Total Gross Amount', width: 200, headerAlign: 'center', },
  { field: 'totalTaxAmount', headerName: 'Total Tax Amount', width: 200, headerAlign: 'center', },
  { field: 'isBundleFlag', headerName: 'Is Bunble Flag', width: 200, headerAlign: 'center', },
  { field: 'sourceProductId', headerName: 'Source Product ID', width: 200, headerAlign: 'center', },
  { field: 'lineMaterialTypeCode', headerName: 'Line Material Item Code', width: 200, headerAlign: 'center', },
  { field: 'requestedMaterialId', headerName: 'Requested Material ID', width: 200, headerAlign: 'center', },
  { field: 'requestedMaterialName', headerName: 'Requested Material Name', width: 200, headerAlign: 'center', },
  { field: 'totalNetAmount', headerName: 'Total Net Amount', width: 200, headerAlign: 'center', },
  { field: 'pepMaterialId', headerName: 'Pep Material ID', width: 200, headerAlign: 'center', },

];

export default function DataTable({ itemsResult }) {
  return (
    <>
      <br />
      <Typography variant="subtitle1" component="div">
       Items List
      </Typography>
      <div style={{ width: '100%' }}>
        <DataGrid
          autoHeight
          getRowId={(row) => row.sourceOrderLineId}
          getRowHeight={() => 'auto'}
          rows={itemsResult}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: 'black',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
            '& .MuiDataGrid-columnsContainer': {
              backgroundColor: '#fafafa',
            },
            '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
              borderRight: `5px solid ${'#f0f0f0'
                }`
            },
            '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
              borderBottom: `1px solid '#303030'
            }`,
            },
            '& .MuiDataGrid-cell': {
              color:
                'rgba(0, 0, 0, 0.87)',
            },
            '& .MuiPaginationItem-root': {
              borderRadius: 0,
            },
          }}
        />
      </div>
    </>
  );
}
