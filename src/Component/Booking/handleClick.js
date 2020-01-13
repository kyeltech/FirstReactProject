import React from 'react'
import Button from 'react-bootstrap'

function handleClick(){
    const handleClick = () => setLoading(true);
    return (
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Loading…' : 'Click to load'}
      </Button>
    );
  }
  export default handleClick
