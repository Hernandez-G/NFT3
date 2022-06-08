import { useState } from "react";
import CommentSectionForm from "../CommentSectionForm/CommentSectionForm";
import { GoComment } from "react-icons/go";

import "./Modal.css"

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [comments, setComments] = useState('');

  function addComment(newComment) {
    setComments(`${comments}\n${newComment}`)
  }

  const toggleModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  return(
    <>
    <button onClick={toggleModal} className="btn-modal"> <GoComment /> </button>

    {modal && 
    
    <div className="modal">
    <div onClick={toggleModal} className="overlay" ></div>
    <div className="modal-content">
      <h2>Open Modal</h2>
        <CommentSectionForm addComment={addComment}/>
      <pre>{comments}</pre>
    </div>
    </div>
    
  }
    </>
  );
}