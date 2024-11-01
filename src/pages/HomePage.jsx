import { css } from "@emotion/css";
import { useEffect, useState, useRef } from "react";
import NavBar from "../components/NavBar";
import TrendCard from "../components/TrendCard";
import TodoMain from "../components/TodoMain";
import { useNavigate } from "react-router-dom";

function HomePage() {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        background-color: #f6f6f6;
        padding: 0 2rem;
        margin: 0 auto;
      `}
    >
      <div
        className={css`
          width: 100%;
          display: flex;
          float: left;
          font-size: 23px;
          font-weight: 600;
          margin: 2rem 0 1rem 0;
        `}
      >
        실시간 소비 트렌트
      </div>
      {/* Map Component */}
      <TrendCard />
      <TodoMain />

      <NavBar isSelected={"Home"} />
    </div>
  );
}

export default HomePage;
