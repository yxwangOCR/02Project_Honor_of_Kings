import { useState } from "react";

const useToggle = (initialState) => {
  const [show, setShow] = useState(initialState);
  const toggler = () => setShow(!show);
  return [show, toggler];
};

export default useToggle;
