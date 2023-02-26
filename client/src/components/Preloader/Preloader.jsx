import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Preloader = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Backdrop
        sx={{ color: '#4f9c2c', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
        style={{ backgroundColor: 'white', opacity: 0.7 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Preloader;
