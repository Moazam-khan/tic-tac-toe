import React from 'react';

const Header = () => {
  const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
    alignSelf: 'stretch',
  };
  
  // First Flex Container Style
  const flexContainer = {
    display: 'flex',
    padding: '3px 9px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: 'normal',
    borderRadius: '8px',
    background: 'rgba(23, 142, 85, 0.44)',
    border: '1px solid white',
  
  };
  
  // Second Flex Container (Green Background)
  const flexContainerGreen = {
    ...flexContainer,
    width: '58px',
    borderRadius: '8px',
    background: 'rgba(23, 142, 85, 0.80)', 
    border: 'none',
  
     // 80% opacity green
  };
  
  // Third Flex Container (Semi Transparent Green Background)
  const flexContainerGreenTransparent = {
    ...flexContainer,
    borderRadius: '8px',
    background: 'rgba(23, 142, 85, 0.44)', 
    border: 'none',
  
     // 44% opacity green
  };
  
  // Fourth Flex Container (White Background)
  const flexContainerWhite = {
    ...flexContainer,
    width: '58px',
    borderRadius: '8px',
    background: '#FFF',
    border: 'none',
  
  };
  
  // Common Text Style
  const commonTextStyle = {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: 'normal',
    
  };
  
  // Green Text Style for White Background Block
  const greenTextStyle = {
    ...commonTextStyle,
    color: '#10C283',  
    // Green text for the white block
  };
  
  return (
    <div style={mainContainerStyle as React.CSSProperties}>
    
      <div style={flexContainer as React.CSSProperties}>
        <span style={commonTextStyle as React.CSSProperties}>You</span>
      </div>
      
      {/* Second Flex Container */}
      <div style={flexContainerGreen as React.CSSProperties}>
        <span style={commonTextStyle as React.CSSProperties}>0-0</span>
      </div>
      {/* Third Flex Container */}
      <div style={flexContainerGreenTransparent as React.CSSProperties}>
        <span style={commonTextStyle as React.CSSProperties}>OPP</span>
      </div>
      
      {/* Fourth Flex Container */}
      <div style={flexContainerWhite as React.CSSProperties}>
        <span style={greenTextStyle as React.CSSProperties}>0:50</span>
      </div>
    </div>
  );
};

export default Header;
