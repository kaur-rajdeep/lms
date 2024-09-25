import React, { useState } from 'react';
import './Tabs.css'; // Create this CSS file for styling
import ProgramJourney from '../components/ProgramJourney'
import { ProgramModules } from '../components/ProgramModules';
import Internship from '../components/Internship';
import FeeFunding from '../components/FeeFunding';
import { Box } from '@mui/material';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('Program Journey');

  const renderContent = () => {
    switch (activeTab) {
      case 'Program Journey':
        return (
          <div className="content">

      <ProgramJourney/>
          </div>
        );
      case 'Program Modules':
        return (
          <div className="content">
            <ProgramModules/>
          </div>
        );
      case 'Internship/OJT':
        return (
          <div className="content">
           <Internship/>
          </div>
        );
      case 'Fees & Funding':
        return (
          <div className="content">
            <FeeFunding/>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tabs-component">
      <div className="tabs">
        <Box sx={{transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.09)'
        },}}>
        <div 
          className={`tab ${activeTab === 'Program Journey' ? 'active' : ''}`}
          onClick={() => setActiveTab('Program Journey')}
          >
          Program Journey
        </div>
        </Box>
        <Box sx={{transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.09)'
        },}}>
        <div 
          className={`tab ${activeTab === 'Program Modules' ? 'active' : ''}`}
          onClick={() => setActiveTab('Program Modules')}
        >
          Program Modules
        </div>
        </Box>
        <Box sx={{transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.09)'
        },}}>
        <div 
          className={`tab ${activeTab === 'Internship/OJT' ? 'active' : ''}`}
          onClick={() => setActiveTab('Internship/OJT')}
        >
          Internship/OJT
        </div>
        </Box>
        <Box sx={{transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.09)'
        },}}>
        <div 
          className={`tab ${activeTab === 'Fees & Funding' ? 'active' : ''}`}
          onClick={() => setActiveTab('Fees & Funding')}
        >
          Fees & Funding
        </div>
        </Box>
      </div>

      <div className="content-container">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabsComponent;
