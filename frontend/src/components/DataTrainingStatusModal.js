import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Typography, Box, Pagination, PaginationItem } from '@mui/material';
import copy from './assets/copy.png'
import { pink } from '@mui/material/colors';

import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



const DataTrainingStatusModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Data Training Status
        <IconButton onClick={onClose} edge="end">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {/* Table headers */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '45%' }}>Title</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Added On</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/* Display a message for no data */}
            <TableRow>
              <TableCell colSpan={4} sx={{ textAlign: 'center' }}>
                <Box sx={{ mt: 2 }}>
                  {/* Image placeholder */}
                  <img
                    src={copy} // You can replace this with a local image
                    alt="No Data"
                    style={{ maxWidth: '200px', marginBottom: '20px' }}
                  />

                  {/* No data message */}
                  <Typography variant="h6">No Data Added for Training</Typography>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Pagination controls */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Pagination
            count={1} // Single page
            shape="rounded" // Rounded corners
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{
                  borderRadius: '50%', // Circular
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main', // Primary color for selected
                    color: 'white', // Text color
                  },
                }}
                components={{ previous: NavigateBeforeIcon, next: NavigateNextIcon }} // Icons for navigation
              />
            )}
          />
        </Box>
      </DialogContent>

      {/* Cancel button */}
      <DialogActions>
      <Button onClick={onClose} sx={{ color: pink[500], border:`1px solid ${pink[500]}` }} variant="outlined">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DataTrainingStatusModal;
