import { React, useEffect, useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Typography, Box } from "@mui/material";
import { pink } from '@mui/material/colors';



const EditModal = ({ open, onClose, initialData, onSave }) => {
    const [data, setData] = useState(initialData.data || "");
    const [sourceLink, setSourceLink] = useState(initialData.sourceLink || "");
    const [readMoreLabel, setReadMoreLabel] = useState(initialData.readMoreLabel || "");
  
    useEffect(() => {
      // Update the state when initialData changes
      setData(initialData.data || "");
      setSourceLink(initialData.sourceLink || "");
      setReadMoreLabel(initialData.readMoreLabel || "");
    }, [initialData]);
  
    const handleSave = () => {
      onSave({
        data,
        sourceLink,
        readMoreLabel
      });
      onClose();
    };
  
  const maxLength = 2000;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md" // Adjust this value to increase/decrease width
    >
      <DialogTitle>Edit Data</DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Data
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={6}
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="Data"
            inputProps={{ maxLength }}
            sx={{ mb: 1 }}
          />
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{ textAlign: 'right', display: 'block' }}
          >
            {`${data.length}/${maxLength}`}
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Read More/Source Link
          </Typography>
          <TextField
            fullWidth
            value={sourceLink}
            onChange={(e) => setSourceLink(e.target.value)}
            placeholder="The Source or Read More link user gets at the end of the message"
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Read More Label
          </Typography>
          <TextField
            fullWidth
            value={readMoreLabel}
            onChange={(e) => setReadMoreLabel(e.target.value)}
            placeholder="The label for Read More link user gets at the end of the message"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ color: pink[500], border:`1px solid ${pink[500]}` }} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
