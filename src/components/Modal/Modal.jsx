import { useState } from "react";
import "./Modal.css"

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  return(
    <>
    <button onClick={toggleModal} className="btn-modal">open</button>

    {modal && 
    
    <div className="modal">
    <div onClick={toggleModal} className="overlay" ></div>
    <div className="modal-content">
      <h2>Open Modal</h2>
      <p>habghbagljanjkgndakjnbg
      </p>
    </div>
    </div>
    
  }
    </>
  );
}