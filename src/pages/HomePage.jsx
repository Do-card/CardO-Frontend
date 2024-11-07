import { css } from "@emotion/css";
import { useEffect, useState, useRef } from "react";
import NavBar from "../components/NavBar";
import TrendCard from "../components/TrendCard";
import TodoMain from "../components/TodoMain";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import {trendAll} from "../apis/Home";

function HomePage() {
  const hasCard = false;
  const login = async () => {
    const response = await trendAll().then((res) => {
      console.log(response);
      return res;
    });
    if (response) {
      
    } else {
      
    }
  };
  login();

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
          <div className={css`z-index: 1;`}>
            {hasCard ? 
              (
                <div className={css`
                  display: flex;
                `}>
                  <div
                    className={css`
                      padding: 1.5rem;
                      height: 13rem;
                      width: 22rem;
                      border-radius: 1rem;
                      background-color: #ffffff;
                      color: #6c6c6c;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      box-shadow: 0 0 5px rgb(0, 0, 0, 0.15);
                      box-sizing: border-box;
                      cursor: pointer;
                    `}
                  >
                    <div
                      className={css`
                        font-size: 1.3rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        text-align: end;
                        width: 100%;
                        height: 100%;
                      `}
                    >
                      <span className={css`
                        display: flex;
                        justify-content: center;
                        padding-bottom: 1rem;
                        font-size: 1rem;
                      `}
                      >등록된 카드가 없습니다.</span>
                      <button className={css`
                          background-color: #6c6c6c;
                          color: #ffffff;
                          padding: 0.5rem 1rem;
                          border-radius: 0.5rem;
                          cursor: pointer;
                          font-size: 1rem;
                          width: fit-content;
                          border: none;
                          font-size: 0.8rem;
                          font-weight: 700;
                        `}>
                        카드 등록하러 가기
                      </button>
                    </div>
                  </div>                   
                </div>
              ):(
                <div className={css`
                  display : flex;
                `}>
                  <Card/>
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
                
              )
            }
          </div>
        </div>
        
      </div>

      <NavBar isSelected={"Home"} />
    </div>
  );
}

export default HomePage;
