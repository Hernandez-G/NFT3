import { useState } from "react";
import "./CommentSectionForm.css"
import { RiAddCircleFill } from "react-icons/ri"


function CommentSectionForm({addComment}) {
  const [comment, setComment] = useState([]); {
  
  const handleComment = evt => {
      setComment(evt.target.value);
    }

    
    

    
    
    return (
      <>
      
      <form className="comment-form" onSubmit= {(evt) => {
        evt.preventDefault();
        addComment(comment)
        }}>

      <div>
      <label>
      {/* custom username */}
      Name:
      </label>
      <input 
      type="text" 
      placeholder="comment here"
      onChange={handleComment}
      value={comment}
      />
    
      
      </div>
      <button type="submit" > <RiAddCircleFill /> </button> 

      </form>
      </>
      )
    };
      
  }
export default CommentSectionForm;
