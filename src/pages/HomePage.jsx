import { css } from "@emotion/css";
import { useEffect, useState, useRef } from "react";
import NavBar from "../components/NavBar";
import TrendCard from "../components/TrendCard";
import TodoMain from "../components/TodoMain";
import Card from "../components/Card";
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
          font-size: 1.2rem;
          font-weight: 600;
          margin: 1.5rem 0 0.5rem 0;
        `}
      >
        실시간 소비 트렌트
      </div>
      {/* Map Component */}
      <TrendCard />
      <TodoMain />
      <div className={css`
        display: flex;
      `}>
        <div className={css`
          display : flex;
          scale: 0.8;
          background-color: #ffffff;
          border-radius: 1rem;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          background-color: #FFFCE8;
        `}
        >
          <div
            className={css`
              z-index: 1;
            `}
          >
            <Card/>
          </div>
          <div
              className={css`
                position: relative;
                display: flex;
                width: 2rem;
                height: parent;
                border-radius: 1rem;
                z-index: 0;
                align-items: center;
                justify-content: center;
                writing-mode: vertical-lr;
                color: #555555;
                font-weight: 700;
                font-size: 0.9rem;
              `}
            >
              
              카드 관리
            </div>
        </div>
        
      </div>

      <NavBar isSelected={"Home"} />
    </div>
  );
}

export default HomePage;
