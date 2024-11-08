import { css } from "@emotion/css";
import { useState, useEffect } from "react";
import {getAllFavoriteMarkers} from "../apis/Todo";
import { useNavigate } from "react-router-dom";

function TodoMain() {
  // Define initial state with each pattern's "isComplete" status
  const [patterns, setPatterns] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    getAllFavoriteMarkers().then((res)=>{
      setPatterns(res[0].items.filter((item) => {
        return !item.isDone && item;
      }));
    });
  }, []);


  return (
    <div
      className={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 1rem;
        background-color: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        height: 10rem;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          position: relative;
        `}
      >
        <div
          className={css`
            padding-left: 1rem;
            padding-top: 1rem;
            display: flex;
            align-items: center;
            width: 100%;
            font-weight: 700;
            color: #002c1b;
            background-color: #e6ffca;
            border-radius: 1rem 0.6rem 0 0;
            font-size: 1.5rem;
          `}
        >
          TODO LIST
        </div>
        <div
          className={css`
            position: relative;
            background-color: #e6ffca;
            border-radius: 0 1rem 0 0;
          `}
        >
          <div
            className={css`
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 0 1rem 0 0.6rem;
              top: 0;
              right: 0;
              background-color: #ffffff;
              width: 3rem;
              height: 3rem;
            `}
          >
            <img
              src="/move.svg"
              alt=""
              className={css`
                position: parent;
                width: 2rem;
                height: 2rem;
              `}
              onClick={()=>navigate("/todo")}
            />
          </div>
        </div>
      </div>
      <div
        className={css`
          border-radius: 0 0.6rem 1rem 1rem;
          display: flex;
          flex-direction: column;
          background-color: #e6ffca;
          padding: 0 0 1rem 1rem;
          height: 7rem;
          overflow: auto;
          
          ::-webkit-scrollbar{
            display : none;
          }
        `}
        
      >
        {patterns.map((pattern) => (
          <div
            className={css`
              padding: 5px;
              font-weight: 600px;
              display: flex;
              cursor: pointer;
            `}
            key={pattern.id}
          >
            <div
              className={css`
                padding-right: 15px;
                color: #002c1b;
                display: flex;
                justify-content: center;
                align-items: center;
              `}
            >
              <img src="/checked.svg" alt="" 
                className={css`
                  color: #002C1B;
                  width: 1rem;
              `}/>
            </div>
            <div
              className={css`
                color: #002C1B;
                font-size: 1.1rem;
              `}
            >
              {pattern.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoMain;
