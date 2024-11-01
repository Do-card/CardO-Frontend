import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

// map반복문으로 매핑해서 nav뿌릴 수 있을 것 같음

function NavBar({ isSelected }) {
  const navigate = useNavigate();

  // const goToMyPage = () => {
  //   navigate("/mypage");
  // };

  // const goToHome = () => {
  //   navigate("/");
  // };

  // const goToMap = () => {
  //   navigate("/map");
  // };

  const menuName = ["User", "Card", "Home", "Map", "Todo"];

  const redirectPage = (page) => {
    switch (page) {
      case "User":
        navigate("/mypage");
        break;
      case "Card":
        navigate("/card");
        break;
      case "Home":
        navigate("/home");
        break;
      case "Map":
        navigate("/map");
        break;
      default:
        navigate("/todo");
        break;
    }
  };

  return (
    <div
      className={css`
        position: absolute;
        bottom: 25px;
        width: 20.56rem;
        box-sizing: border-box;
        padding: 0.5rem;

        height: 4rem;
        background-color: white;
        border-radius: 3rem;
        box-shadow: 0 0 10px rgb(0, 0, 0, 0.15);
        z-index: 2;

        display: flex;
        flex-direction: row;
        align-items: center;
      `}
    >
      {menuName.map((menu, index) => {
        return (
          <div
            key={index}
            className={css`
              width: 6.3rem;
              height: 3.2rem;
              box-sizing: border-box;
              background-color: ${isSelected === menu ? "black" : "white"};
              border-radius: 3rem;
              box-shadow: ${isSelected === menu
                ? "0 0 10px rgba(0, 0, 0, 0.15)"
                : "none"};

              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
            `}
            onClick={() => redirectPage(menu)}
          >
            {isSelected === menu ? (
              <img src={`/${menu}_white.svg`} alt="" />
            ) : (
              <img src={`/${menu}.svg`} alt="" />
            )}
          </div>
        );
      })}
      {/* <div
        className={css`
          width: 6.3rem;
          height: 3.2rem;
          box-sizing: border-box;
          background-color: ${isSelected === "User" ? "black" : "white"};
          border-radius: 3rem;
          box-shadow: ${isSelected === "User"
            ? "0 0 10px rgba(0, 0, 0, 0.15)"
            : "none"};

          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        `}
        onClick={() => goToMyPage()}
      >
        {isSelected === "User" ? (
          <img src="/User_white.svg" alt="" />
        ) : (
          <img src="/User.svg" alt="" />
        )}
      </div>
      <div
        className={css`
          width: 6.3rem;
          height: 3.2rem;
          box-sizing: border-box;
          background-color: ${isSelected === "Card" ? "black" : "white"};
          border-radius: 3rem;
          box-shadow: ${isSelected === "Card"
            ? "0 0 10px rgba(0, 0, 0, 0.15)"
            : "none"};

          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        `}
        onClick={() => goToMyPage()}
      >
        {isSelected === "Card" ? (
          <img src="/Card_white.svg" alt="" />
        ) : (
          <img src="/Card.svg" alt="" />
        )}
      </div>
      <div
        className={css`
          width: 6.3rem;
          height: 3.2rem;
          box-sizing: border-box;
          background-color: ${isSelected === "Home" ? "black" : "white"};
          border-radius: 3rem;
          box-shadow: ${isSelected === "Home"
            ? "0 0 10px rgba(0, 0, 0, 0.15)"
            : "none"};

          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        `}
        onClick={() => goToHome()}
      >
        {isSelected === "Home" ? (
          <img src="/Home_white.svg" alt="" />
        ) : (
          <img src="/Home.svg" alt="" />
        )}
      </div>

      <div
        className={css`
          width: 6.3rem;
          height: 3.2rem;
          box-sizing: border-box;
          background-color: ${isSelected === "Map" ? "black" : "white"};
          border-radius: 3rem;
          box-shadow: ${isSelected === "Map"
            ? "0 0 10px rgba(0, 0, 0, 0.15)"
            : "none"};

          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        `}
        onClick={() => goToMap()}
      >
        {isSelected === "Map" ? (
          <img src="/Map_white.svg" alt="" />
        ) : (
          <img src="/Map.svg" alt="" />
        )}
      </div>
      <div
        className={css`
          width: 6.3rem;
          height: 3.2rem;
          box-sizing: border-box;
          background-color: ${isSelected === "Todo" ? "black" : "white"};
          border-radius: 3rem;
          box-shadow: ${isSelected === "Todo"
            ? "0 0 10px rgba(0, 0, 0, 0.15)"
            : "none"};

          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        `}
        onClick={() => goToMap()}
      >
        {isSelected === "Map" ? (
          <img src="/Todo_white.svg" alt="" />
        ) : (
          <img src="/Todo.svg" alt="" />
        )}
      </div> */}
    </div>
  );
}

export default NavBar;
