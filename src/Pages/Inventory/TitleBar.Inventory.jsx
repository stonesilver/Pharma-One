import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '../../components/base/Button';
import PageTitle from '../../components/PageTitle';

const TitleBar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      px={5}
    >
      <PageTitle
        options={['Inventory']}
        subtitle='List of medicines available for sales.'
      />
      <Button
        variant='contained'
        size='large'
        bgColor='red.main'
        textColor='white.main'
        text='+ Add New Item'
      />
    </Stack>
  );
};

export default TitleBar;
