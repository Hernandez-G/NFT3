import React, { useState } from "react";
import cn from "classnames";
import { AiOutlineHeart } from "react-icons/ai"
import { BiCommentDetail  } from "react-icons/bi"
// import { ReactComponent as Hand } from "./hand.svg";
// import "./styles.css";

const LikeButton = () => {
  const [liked, setLiked] = useState(null);

  return (
      <>
    <button
      onClick={() => setLiked(!liked)}
      onAnimationEnd={() => setLiked(false)}
      className={cn("like-button-wrapper", {
          liked,
        })}
        >
      <div className="like-button">
    {/* console.log(setLiked); */}
        <AiOutlineHeart />
        {/* <span>Like</span> */}
      </div>
    </button>

    <button>
        <BiCommentDetail />
    </button>
    </>
  );
};

export default LikeButton;

