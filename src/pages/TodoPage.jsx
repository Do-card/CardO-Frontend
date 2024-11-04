import { css } from "@emotion/css";
import { useState } from "react";
import TodoCard from "../components/TodoCard";
import NavBar from "../components/NavBar";

function TodoPage() {
  const [keyword, setKeyword] = useState();
  const todoList = [
    {
      id: 1,
      name: "테스트마커",
      poiId: "3",
      latitude: 37.1436364,
      longitude: 127.415285324,
      colorBackground: "#ffffff",
      favorite: false,
      items: [
        {
          id: 1,
          markerId: 1,
          name: "테스트아이템1",
          category: "테스트",
          done: false,
          deleted: false,
        },
        {
          id: 2,
          markerId: 1,
          name: "테스트아이템2",
          category: "테스트",
          done: false,
          deleted: false,
        },
      ],
    },
    {
      id: 2,
      name: "테스트마커2",
      poiId: "3",
      latitude: 37.1436364,
      longitude: 127.415285324,
      colorBackground: "#F9FFDE",
      favorite: false,
      items: [],
    },
  ];
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      //검색
    }
  };

  const newMarker = () => {
    // 새로운 빈 마커 추가
  };

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f6f6f6;
        height: 100vh;
        padding: 0 2rem;
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
        <img
          src="/Add.svg"
          alt=""
          className={css`
            position: absolute;
            right: 0;
            top: -3.5rem;
          `}
          onClick={newMarker()}
        />
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
      {todoList.map((todo, index) => (
        <TodoCard Todo={todo} />
      ))}
      <NavBar isSelected={"Todo"} />
    </div>
  );
}
export default TodoPage;
