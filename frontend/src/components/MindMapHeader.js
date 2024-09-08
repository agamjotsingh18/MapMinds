// MindMapHeader.js (updated)
import React from 'react';

const MindMapHeader = ({ onCreateNewNode }) => {
  return (
    <div className="mind-map-header">
      <h2>Mind Map</h2>
      <button onClick={onCreateNewNode}>Create New Node</button>
    </div>
  );
};

export default MindMapHeader;