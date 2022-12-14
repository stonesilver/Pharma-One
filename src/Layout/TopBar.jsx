import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SearchBar from '../components/base/SearchBar';
import Translate from './Translate';

const TopBar = () => {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        height: 60,
        bgcolor: 'primary.main',
        px: 5,
        py: '0.625rem',
        boxShadow: '0 1px 4px #1D242E6e',
        zIndex: '5',
      }}
    >
      <Box sx={{ flex: '1 1 40%' }}>
        <SearchBar placeholder='Search for anything here..' />
      </Box>

      <Box
        sx={{
          flex: '1 1 20%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Translate />
      </Box>

      <Box sx={{ width: 'fit-content' }}>
        <Stack direction='row' spacing={2} justifyContent='flex-end'>
          <Box
            sx={{
              width: 18,
              height: 18,
              borderRadius: '50%',
              bgcolor: 'yellow.main',
            }}
          ></Box>
          <Typography
            sx={{
              fontWeight: 500,
            }}
          >
            GOOD MORNING
          </Typography>
        </Stack>
        <Stack direction='row' spacing={2}>
          <Typography sx={{ fontSize: '0.75rem' }}>14 January 2022</Typography>
          <Typography sx={{ fontSize: '0.75rem' }}>22:45:04</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default TopBar;
