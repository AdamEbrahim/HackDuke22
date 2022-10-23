import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
    <Box  component="span" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }} bgcolor="beige"  sx={{ p: 2, border: '1px dashed grey' }}>
    
      <Button onClick={handleOpen}>Motivation</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Our Motivation:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The motivation for this project was to create a way educate people about how to be healthy, as well as different ways that people are able to lead a healthy life-style.
          </Typography>
        </Box>
      </Modal>
    </Box>
    </div>
  );
}
