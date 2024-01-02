import React, { useEffect } from 'react';
import { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Home() {
    const columns = useMemo(
      () => [
          {
              accessorKey: 'MaThuoc',
              header: 'Mã thuốc',
            },
            {
              accessorKey: 'NgayHetHan',
              header: 'Ngày hết hạn',
            },
            {
              accessorKey: 'TenThuoc',
              header: 'Tên thuốc',
            },
            {
              accessorKey: 'DonViTinh',
              header: 'Đơn vị thuốc',
            },
            {
              accessorKey: 'DonGia',
              header: 'TĐơn giá',
            },
            {
              accessorKey: 'ChiDinh',
              header: 'Chỉ định',
            },
            {
              accessorKey: 'SoLuongTonKho',
              header: 'Số lượng tồn kho',
            },
           ], []
    );
  
    
    const [Dulieu, setDulieu] = useState(null);
    const fetchService = async () => {
  
      const response = await fetch(
        `http://localhost:5000/api//drugs/getAllDrug`
      ); // Fetch service data
      console.log(response);
      const serviceData = await response.json();
      if (serviceData) {
        const modifiedData = serviceData.map((item) => {
          const formattedNgayHetHan = item.NgayHetHan.split('T')[0]; // Extract the date part
          return { ...item, NgayHetHan: formattedNgayHetHan };
        });
          setDulieu(modifiedData);
      }
    };
  
    useEffect(() => {
      fetchService(); 
    }, []); 
    if (!Dulieu) {
      return <div>Loading...</div>; // Display loading message while fetching data
    }
  
  
    return (
      <MaterialReactTable
        columns={columns}
        data={Dulieu}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
            <Link to="/">
              View Details
            </Link>
            <IconButton
              color="secondary"
              onClick={() => {
                table.setEditingRow(row);
              }}
            >
            </IconButton>
            <IconButton
              color="error"
              onClick={() => {
                const updatedData = [...Dulieu];
                updatedData.splice(row.index, 1); // Assuming simple data table
                setDulieu(updatedData);
              }}
            >
              {/* Add your icon component code */}
            </IconButton>
          </Box>
        )}
      />
    );
}