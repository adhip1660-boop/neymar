import { useState } from "react";
import { FcLike } from "react-icons/fc";

const reactionArray = [
  "🥲",
  "😞",
  "😔",
  "😟",
  "☹️",
  "😊",
  "😄",
  "😁",
  "😀",
  "😃",
  "😆",
  "😂"
];

function L() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const handleClick = () => {
    if (count < reactionArray.length - 1) {
      setCount(count + 1);
      setCount1(count1 + 1);
    }else { 
        setCount(count + 1);
    }
  };

  return (
    <div className="container">
      <h2>
        Likes: {count} {reactionArray[count1]}
      </h2>

      <FcLike
        size={40}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default L;