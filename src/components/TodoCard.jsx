import { css } from "@emotion/css";
import { useState } from "react";

function TodoCard() {
  // Define initial state with each pattern's "completed" status
  const [patterns, setPatterns] = useState([
    { id: 1, name: "립밤 사기", completed: false },
    { id: 2, name: "사과 5개 사기", completed: false },
    { id: 3, name: "커튼 코정 핀 사기", completed: false }
  ]);

  // Toggle the "completed" status when an item is clicked
  const handleToggleComplete = (id) => {
    setPatterns((prevPatterns) =>
      prevPatterns.map((pattern) =>
        pattern.id === id ? { ...pattern, completed: !pattern.completed } : pattern
      )
    );
  };

  return (
    <div
      className={css`
        margin-top: 1.5rem;
        display: flex;
        flex-direction: column;
        border-radius:1rem;
        background-color: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      `}
    >
      <div className={css`
          display: flex;
          width: 100%;
          position: relative;
        `}>
        <div className={css`
          padding-left: 1rem;
          padding-top: 1rem;
          width: 74.5%;
          padding-bottom: 10px;
          font-weight: 700;
          color: #002C1B;
          background-color: #E6FFCA;
          border-radius: 1rem 1rem 0 0;
          font-size: 31px;
        `}>TODO LIST</div>
        <div className={css`
          position: absolute;
          top: 0;
          right: 0;
          background-color: #E6FFCA; 
          border-radius: 0 1rem 0 0;
          width: 4rem;
          height: 4rem;
        `}>
          <div className={css`
          position: absolute;
          border-radius: 0 1rem;
          top: 0;
          right: 0;
          background-color: #ffffff; 
          width: 4rem;
          height: 4rem;
        `}>
            <img src="/move.svg" alt="" 
              className={css`
                position: absolute;
                top: 12px;
                right: 12px;
                width: 2.5rem;
                height: 2.5rem;
            `}/>
          </div>
        </div>
      </div>
      <div className={css`
        border-radius:0 1rem 1rem 1rem;
        padding-left: 1rem;
        padding-bottom: 1.5rem;
        background-color: #E6FFCA;
      `} >
        {patterns.map((pattern) => (
          <div
            onClick={() => handleToggleComplete(pattern.id)}
            className={css`
              padding: 5px;
              font-size: 20px;
              font-weight: 600px;
              display: flex;
              cursor: pointer;
              ${pattern.completed ? "text-decoration: line-through; color: #626262;" : ""}
            `}
            key={pattern.id}
          >
            <div className={css`
                padding-right: 15px;
                color: #002C1B;
                display: flex;
                justify-content: center;
                align-items: center;
              `}>
              <img src="/checked.svg" alt="" />
            </div>
            <div className={css`
                ${pattern.completed ? "color: #626262;" : "color: #002C1B;"}
              `}>
              {pattern.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoCard;
