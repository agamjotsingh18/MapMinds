// MindMapNode.js (updated)
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const MindMapNode = ({ node }) => {
  return (
    <div className="mind-map-node">
      <div className="node-header">
        <h3>{node.title}</h3>
        <FaPlus className="node-icon" />
      </div>
      <div className="node-content">
        <p>{node.content}</p>
      </div>
    </div>
  );
};

export default MindMapNode;