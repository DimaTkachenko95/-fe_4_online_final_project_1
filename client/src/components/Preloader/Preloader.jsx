import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Preloader = (props) => {

  return (
    <div>
      <Backdrop
        sx={{ color: '#4f9c2c', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={props.open}
        style={{ backgroundColor: 'white', opacity: 0.7, position: 'absolute' }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Preloader;
