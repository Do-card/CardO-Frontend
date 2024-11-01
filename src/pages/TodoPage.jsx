import { css } from "@emotion/css";
import { useState } from "react";
import TodoCard from "../components/TodoCard";

function TodoPage() {
  const [keyword, setKeyword] = useState();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      //검색
    }
  };
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f6f6f6;
        height: 100vh;
        padding: 1rem 2rem 2rem 2rem;
      `}
    >
      <div
        className={css`
          width: 100%;
          padding-top: 2rem;

          display: flex;
          float: left;
          font-size: 2.5rem;
          font-weight: bold;
        `}
      >
        Todo
      </div>
      <div
        className={css`
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          margin-top: 1rem;
        `}
      >
        <input
          type="text"
          className={css`
            top: 1.5rem;
            width: 90%;
            height: 2.5rem;
            padding-inline: 1rem;
            border-radius: 0.8rem;
            border: solid #d9d9d9 0.1rem;
            box-shadow: 0 5.2px 6.5px rgb(0, 0, 0, 0.1);
            font-size: 1.2rem;
            color: #474747;
            &:focus {
              outline: none;
            }
          `}
          onKeyDown={handleKeyDown}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <img
          src="/search.svg"
          alt=""
          className={css`
            position: absolute;
            right: 1rem;
          `}
        />
      </div>
      <TodoCard />
    </div>
  );
}
export default TodoPage;
