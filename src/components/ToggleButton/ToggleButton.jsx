import React, { useState } from 'react';
import './index.scss'

function ToggleButton() {
    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
      setIsActive(!isActive);
    };
  
    return (
      <>
        <div className={`toggle-button ${isActive ? 'active' : ''}`} onClick={toggleButton}>
          <div className={`circle ${isActive ? 'active' : ''}`} />
        </div>
      </>
    );
}

export default ToggleButton;