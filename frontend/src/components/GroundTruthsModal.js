import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Typography, Box, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { pink } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';


const GroundTruthsModal = ({ open, onClose, onAddGroundTruth }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm"  PaperProps={{
        sx: { borderRadius: '20px' }, 
      }}>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        Ground Truths

        <IconButton onClick={onClose} edge="end">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
<Divider/>
      <DialogContent>
        {/* Add Ground Truth Button */}
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Button 
            variant="outlined" 
            color="primary" 
            onClick={onAddGroundTruth}
            sx={{ width: '100%', height: '50px' }}
            endIcon={<AddIcon varient="contained" sx={{borderRadius:"50%", bgcolor:"primary.main", color:"white" }}/>} // Long button
          >
            ADD GROUND TRUTH 
          </Button>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 1 }}>
          <Typography variant="h6">No Ground Truths Added</Typography>
        </Box>
      </DialogContent>

      {/* Cancel Button */}
      <DialogActions>
    
      </DialogActions>
    </Dialog>
  );
};

export default GroundTruthsModal;
