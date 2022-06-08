// import { useState } from "react";
import "./CommentSectionForm.css"

function CommentSection() {



    return(
      <>
      
<form className="comment-form">
  <label>
  {/* custom username */}
    Name:
    <input type="text" value="{comments}" />
  </label>
  <input type="submit" value="Submit" className="Submit-btn"/>
</form>
      </>

)

}

export default CommentSection;
