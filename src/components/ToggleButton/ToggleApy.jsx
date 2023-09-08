import React, { useState } from 'react';
import './style.scss';

const ToggleApy = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
      setIsActive(!isActive);
    };
  
    return (
      <>
        <div className={`toggle-apy ${isActive ? 'active' : ''}`} onClick={toggleButton}>
          <div className={`circle-apy ${isActive ? 'active' : ''}`} />
        </div>
      </>
    );
}

export default ToggleApy;