import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Box, Typography, Container } from '@mui/material';

function App() {
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  const columns = [
    { field: 'title', headerName: '名稱', width: 400 },
    { field: 'location', headerName: '地點', width: 400 },
    { field: 'price', headerName: '票價', width: 200 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6');
        const data = await response.json();
        
        // Process data to match DataGrid requirements (needs unique id)
        const processedData = data.map((item, index) => ({
          id: index,
          title: item.title,
          location: item.showInfo[0]?.location || 'N/A',
          price: item.showInfo[0]?.price || '免費',
        }));
        
        setRows(processedData);
        setFilteredRows(processedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchText(value);
    const filtered = rows.filter((row) => 
      row.title.toLowerCase().includes(value)
    );
    setFilteredRows(filtered);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        景點觀光展覽資訊
      </Typography>
      
      <Box sx={{ mb: 2 }}>
        <TextField
          label="輸入名稱搜尋"
          variant="outlined"
          fullWidth
          value={searchText}
          onChange={handleSearch}
        />
      </Box>

      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50]}
          loading={loading}
          pagination
        />
      </div>
    </Container>
  );
}

export default App;
