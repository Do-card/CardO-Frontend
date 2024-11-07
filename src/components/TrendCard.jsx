import { css } from "@emotion/css";
import { useEffect, useState, useRef } from "react";
import {trendAll} from "../apis/Home";

function TrendCard() {
  const [mainTrend, setMainTrend] = useState([]);
  const [userTrend, setUserTrend] = useState([]);

  // Fetch data and update pattern groups
  const getTrend = async () => {
    const response = await trendAll().then((res) => {
      console.log(res);
      return res;
    });

    if (response) {
      setMainTrend(response.result.mainTrend);
      setUserTrend(response.result.userTrend);
    } else {
      console.log("No response received.");
    }
  };

  const truncateText = (text) => {
    return text.length > 7 ? `${text.slice(0, 7)} ..` : text;
  };

  useEffect(() => {
    getTrend();
  }, []);

  return (
    <div
      className={css`
        display: flex;
        width: 100%;
        border-radius:1rem;
        background-color: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        height: 9.5rem;
      `}
      >
      <div
        className={css`
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <div className={css`
            margin-bottom: 5px;
            font-weight: 600;
            color: #555555;
            font-size: 1rem;
          `}>나의 소비 패턴</div>
        <div>
          {mainTrend.map((pattern) => (
            <div
            className={css`
              padding: 5px;
              border-bottom: 2px solid #C6C6C6;
            `}
             key={pattern.id}>
              <span className={css`
                  padding-right : 10px;
                  color: #002C1B;
                  font-weight: 600;
                `}>{pattern.rank}</span>
              <span className={css`
                  color: #626262;
                  font-size: 1rem;
                `}>
                  {truncateText(pattern.category)}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        className={css`
          width: 50%;
          padding: 10px 0 ;
          background-color: #E1E9FF;
          border-radius: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          className={css`
            margin-bottom: 5px;
            font-weight: 600;
            color: #014886;
          `}
        >20대 소비 패턴</div>
        <div>
          {userTrend.map((pattern) => (
            <div
              className={css`
                padding: 6px 5px;
                border-bottom: 2px solid #ffffff;
              `}
             key={pattern.id}>
              <span
                className={css`
                  padding-right : 10px;
                  color: #014886;
                  font-weight: 600;
                `}>{pattern.rank}</span>
              <span
                className={css`
                  font-size: 1rem;
                  color: #626262;
                `}
              >{truncateText(pattern.category)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendCard;
