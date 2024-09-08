import * as React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Typography,
  Box,
  ToggleButton,
  ToggleButtonGroup
} from "@mui/material";
import { useState } from "react";
import { pink } from '@mui/material/colors';

const AddDataModal = ({ open, onClose, onSave }) => {
  const [selectedOption, setSelectedOption] = useState("Text");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const maxLength = 2000;

  const handleSave = () => {
    const data = { selectedOption, title, description };
    onSave(data);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md" // Adjust modal width as needed
    >
      <DialogTitle>Add Data</DialogTitle>
      <DialogContent>
        {/* Option Selection */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Choose Type
          </Typography>
          <ToggleButtonGroup
            value={selectedOption}
            exclusive
            onChange={(e, newOption) => setSelectedOption(newOption)}
            color="primary"
            fullWidth
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <ToggleButton value="Text">Text</ToggleButton>
            <ToggleButton value="PDF">PDF</ToggleButton>
            <ToggleButton value="EPUB">EPUB</ToggleButton>
            <ToggleButton value="Link">Link</ToggleButton>
            <ToggleButton value="CSV">CSV</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Title Input */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Title
          </Typography>
          <TextField
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </Box>

        {/* Description Input */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Description
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            inputProps={{ maxLength }}
          />
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{ textAlign: 'right', display: 'block' }}
          >
            {`${description.length}/${maxLength}`}
          </Typography>
        </Box>

        {/* Read More/Source Link Input */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Read More/Source Link
          </Typography>
          <TextField
            fullWidth
            placeholder="The Source or Read More link user gets at the end of the message"
          />
        </Box>
      </DialogContent>

      {/* Actions */}
      <DialogActions>
      <Button onClick={onClose} sx={{ color: pink[500], border:`1px solid ${pink[500]}` }} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary" variant="contained">
          Back
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddDataModal;
