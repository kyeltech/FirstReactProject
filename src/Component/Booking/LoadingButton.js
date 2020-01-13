import React from 'react'
import Button from 'react-bootstrap'
  
  function LoadingButton() {
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      if (isLoading) {
        ButtonAction().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  
  export default LoadingButton