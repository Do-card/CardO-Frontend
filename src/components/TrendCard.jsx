import { css } from "@emotion/css";
import { useEffect, useState, useRef } from "react";

function TrendCard() {
  // Define two separate pattern groups
  const patternGroup1 = [
    { id: 1, name: "초코우유" },
    { id: 2, name: "커피우유" },
    { id: 3, name: "딸기우유" }
  ];

  const patternGroup2 = [
    { id: 4, name: "사과주스" },
    { id: 5, name: "오렌지주스" },
    { id: 6, name: "망고주스" }
  ];

  return (
    <div
      className={css`
        display: flex;
        width: 100%;
        border-radius:1rem;
        background-color: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      `}
    >
      {/* Render first group */}
      <div
        className={css`
          width: 50%;
          padding: 1rem 0 1.5rem 1.5rem;
        `}
      >
        <div className={css`
            margin-bottom: 10px;
            font-weight: 600;
            color: #555555;
          `}>나의 소비 패턴</div>
        <div>
          {patternGroup1.map((pattern, index) => (
            <div
            className={css`
              padding: 5px;
              margin-right: 1.5rem;
              border-bottom: 2px solid #C6C6C6;
            `}
             key={pattern.id}>
              <span className={css`
                  padding-right : 15px;
                  color: #002C1B;
                  font-weight: 600;
                `}>{index + 1}</span>
              <span className={css`
                  color: #626262;
                `}>{pattern.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Render second group */}
      <div
        className={css`
          width: 50%;
          background-color: #E1E9FF;
          border-radius: 1rem;
          padding: 1rem 0 1.5rem 1.5rem;
        `}
      >
        <div
          className={css`
            margin-bottom: 10px;
            font-weight: 600;
            color: #014886;
          `}
        >20대 소비 패턴</div>
        <div>
          {patternGroup2.map((pattern, index) => (
            <div
              className={css`
                padding: 5px;
                margin-right: 1.5rem;
                border-bottom: 2px solid #ffffff;
              `}
             key={pattern.id}>
              <span
                className={css`
                  padding-right : 15px;
                  color: #014886;
                  font-weight: 600;
                `}>{index + 1}</span>
              <span
                className={css`
                  color: #626262;
                `}
              >{pattern.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendCard;
