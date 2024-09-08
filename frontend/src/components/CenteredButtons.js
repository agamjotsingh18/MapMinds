import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RestoreIcon from '@mui/icons-material/Restore';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { pink } from '@mui/material/colors';
import AddDataModal from './AddDataModal';
import DataTrainingStatusModal from './DataTrainingStatusModal'; // Import the new modal

import GroundTruthsModal from './GroundTruthsModal'; 

const CenteredButtons = () => {
  const [isAddDataModalOpen, setIsAddDataModalOpen] = useState(false);
  const [isTrainingStatusModalOpen, setIsTrainingStatusModalOpen] = useState(false);

  const [isGroundTruthsModalOpen, setGroundTruthsModalOpen] = useState(false);

  const handleOpenGroundTruthsModal = () => {
    setGroundTruthsModalOpen(true);
  };

  const handleCloseGroundTruthsModal = () => {
    setGroundTruthsModalOpen(false);
  };

  const handleAddGroundTruth = () => {
    // Logic for adding a ground truth can go here
    console.log("Add Ground Truth button clicked");
  };


  // Functions to handle opening/closing the modals
  const handleOpenAddDataModal = () => setIsAddDataModalOpen(true);
  const handleCloseAddDataModal = () => setIsAddDataModalOpen(false);

  const handleOpenTrainingStatusModal = () => setIsTrainingStatusModalOpen(true);
  const handleCloseTrainingStatusModal = () => setIsTrainingStatusModalOpen(false);

  const handleSaveData = (newData) => {
    console.log('Saved Data: ', newData);
    setIsAddDataModalOpen(false);
  };

  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Box 
        sx={{
          display: 'flex', 
          gap: 1,
          alignItems: 'center'
        }}
      >
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleOpenAddDataModal}>
          Add Data
        </Button>
        <Button variant="contained" sx={{ bgcolor: pink[500] }} startIcon={<RestoreIcon />} onClick={handleOpenTrainingStatusModal}>
          Data Training Status
        </Button>
        <Button variant="contained" sx={{ color: pink[500], bgcolor: "white", border: `1px solid ${pink[500]}` }} onClick={handleOpenGroundTruthsModal} startIcon={<QuestionAnswerIcon />}>
          Ground Truths
        </Button>
      </Box>

      {/* Modals */}
      <AddDataModal
        open={isAddDataModalOpen}
        onClose={handleCloseAddDataModal}
        onSave={handleSaveData}
      />
      
      <DataTrainingStatusModal
        open={isTrainingStatusModalOpen}
        onClose={handleCloseTrainingStatusModal}
      />
      <GroundTruthsModal
      open={isGroundTruthsModalOpen}
      onClose={handleCloseGroundTruthsModal}
      onAddGroundTruth={handleAddGroundTruth}
      />
    </Box>
  );
};

export default CenteredButtons;
