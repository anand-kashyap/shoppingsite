import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const CartPortal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.querySelector('#cartPortal') as Element)
    : null;
};

export default CartPortal;
