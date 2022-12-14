import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomSelect from '../../components/base/Select';
import DateRange from '../../components/base/DateRange';

const SalesReportFilter = () => {
  const [state, setState] = useState({
    medicineGroup: '- Select Group -',
    userName: '- Select User Name -',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevS) => ({ ...prevS, [name]: value }));
  };

  const { medicineGroup, userName } = state;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 3,
        mt: 2,
        mb: 5,
      }}
    >
      <Box sx={{ flex: '40%' }}>
        <Typography mb='3px'>Date Range</Typography>
        <DateRange />
      </Box>
      <Box sx={{ flex: '35%' }}>
        <Typography mb='3px'>Medicine Group</Typography>
        <CustomSelect
          options={['Group One', 'Group Two', 'group Three']}
          value={medicineGroup}
          placeholder='- Select Group -'
          name='medicineGroup'
          handleChange={handleChange}
          bgcolor='#b7c1ca6e'
        />
      </Box>
      <Box sx={{ flex: '25%' }}>
        <Typography mb='3px'>User Name</Typography>
        <CustomSelect
          options={['Subash', 'John', 'Sally']}
          value={userName}
          placeholder='- Select User Name -'
          name='userName'
          handleChange={handleChange}
          bgcolor='#b7c1ca6e'
        />
      </Box>
    </Box>
  );
};

export default SalesReportFilter;
