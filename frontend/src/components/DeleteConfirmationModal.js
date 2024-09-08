import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Box, Zoom } from '@mui/material';
import InfoIconOutlined from '@mui/icons-material/InfoOutlined';
import { pink } from '@mui/material/colors';


const DeleteConfirmationModal = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Zoom in={open} timeout={500}>
            <InfoIconOutlined sx={{ fontSize: 100, color: "#f8bb86"}} />
          </Zoom>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Confirmation
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" align="center">
          Are you sure you want to delete this data?
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'end', mb: 2, mr:1}}>
      <Button onClick={onClose} sx={{ color: pink[500], border:`1px solid ${pink[500]}` }} variant="outlined">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary" variant="contained">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
