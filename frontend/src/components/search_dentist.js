import { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Search = () => {
  const columns = useMemo(
    () => [
        {
            accessorKey: 'HoTen',
            header: 'Họ và tên',
          },
          {
            accessorKey: 'SDT',
            header: 'Số điện thoại',
          },
          {
            accessorKey: 'GioiTinh',
            header: 'Giới tính',
          },
          {
            accessorKey: 'NgaySinh',
            header: 'Ngày sinh',
          },
          {
            accessorKey: 'DiaChi',
            header: 'Địa chỉ',
          },
          {
            accessorKey: 'ChuyenMon',
            header: 'Chuyên môn',
          },
          {
            accessorKey: 'BangCap',
            header: 'Bằng cấp',
          },
    ],
    []
  );

  
  const [Dulieu, setDulieu] = useState(null);

  const fetchService = async () => {

    const response = await fetch(
      `http://localhost:5000/api/users/getAllUser`
    ); // Fetch service data
    console.log(response);
    const serviceData = await response.json();
    if (serviceData) {
      const modifiedData = serviceData.map((item) => {
        const formattedNgaySinh = item.NgaySinh.split('T')[0]; // Extract the date part
        return { ...item, NgaySinh: formattedNgaySinh };
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
};

export default Search;