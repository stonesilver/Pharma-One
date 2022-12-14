import Box from '@mui/material/Box';
import MedicineListTable from './MedicineListTable';
import SearchFilter from './SearchFilter';
import TitleBar from './TitleBar.MedicineList';

const MedicineList = () => {
  return (
    <Box px={5}>
      <TitleBar />
      <SearchFilter />
      <MedicineListTable />
    </Box>
  );
};

export default MedicineList;
