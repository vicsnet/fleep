import ModalContext from "./modal-context";
import { useState } from "react";

const ModalProvider = (props) => {
    const [openAddUser, setOpenAddUser] = useState(false);
    
  const handleState = () => {
      setOpenAddUser((prevState)=> !prevState);
    //   console.log('use me')
  };
  const modalCtx = {
    setModal: handleState,
    openModal: openAddUser ,
  };

  return (
    <ModalContext.Provider value={modalCtx}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
