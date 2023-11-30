import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function usePageChange(callback: (location: unknown) => void) {
  const location = useLocation();

  useEffect(() => {
   



    
    callback(location);
  }, [location, callback]);
}

export default usePageChange;