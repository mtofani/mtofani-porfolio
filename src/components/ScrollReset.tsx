import { useEffect } from 'react';

export default function ScrollReset() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo({top: 0, behavior: 'auto'});
  }, []);

  return <div></div>;
}