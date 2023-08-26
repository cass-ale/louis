import { createContext, useRef } from "react";

export const ButtonScroll = createContext();

export const ButtonScrollProvider = ({ children }) => {
    const targetRef = useRef(null);
const handleClick = () =>{
    targetRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
}



  return (
    <ButtonScroll.Provider value={{ targetRef, handleClick }}>
      {children}
    </ButtonScroll.Provider>
  );
};