import { css } from "@emotion/css";
import { useEffect, useState, useRef } from "react";
import NavBar from "../components/NavBar";
import TrendCard from "../components/TrendCard";
import TodoCard from "../components/TodoCard";
import { useNavigate } from "react-router-dom";

function HomePage(){
  return (
    <div className={css`
      display: flex;
      flex-direction: column;
      height: 100vh;
      background-color: #f5f5f5;
      padding: 1rem 2rem 2rem 2rem;
      margin: 0 auto;
    `}>
      <div
        className={css`
          font-size: 23px;
          font-weight: 600;
          margin: 1rem 0;
      `}>실시간 소비 트렌트</div>
      {/* Map Component */}
      <TrendCard />
      <TodoCard />
      


      <NavBar isSelected={"Home"} />
    </div>
  )
}

export default HomePage;