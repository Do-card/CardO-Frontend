import { css } from "@emotion/css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PlaceInfo({ place, onClick }) {
  const navigator = useNavigate();
  const setLocation = (place) => {
    const data = {
      poiId: place.id,
      poiName: place.place_name,
      latitude: place.y,
      longitude: place.x,
    };
    navigator("/todo");
  };
  return (
    <div
      className={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
      `}
    >
      <div
        className={css`
          position: relative;
          width: 85%;
          background-color: ${place.selected ? "#F6F6F6" : "#ffffff"};
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: baseline;
          border: 1px solid white;
          border-radius: 0.6rem;
          box-shadow: 0 0 7px rgb(0, 0, 0, 0.15);
          box-sizing: border-box;
          margin-top: 1.3rem;
          z-index: 3;
        `}
        onClick={() => onClick()}
      >
        {place.selected ? (
          <div
            className={css`
              position: absolute;
              top: 1.4rem;
              right: 1.5rem;
              border: solid #f6f6f6;
              box-shadow: 0 0 7px rgb(0, 0, 0, 0.15);
              padding: 0.3rem 0.5rem;
              border-radius: 0.4rem;
              color: #777777;
            `}
            onClick={() => setLocation(place)}
          >
            지정
          </div>
        ) : (
          <></>
        )}
        <div
          className={css`
            display: flex;
            align-items: baseline;
          `}
        >
          <div
            className={css`
              color: #515151;
              font-size: 1.1rem;
              font-weight: 500;
            `}
          >
            {place.place_name}
          </div>
          <div
            className={css`
              color: #b6b6b6;
              font-size: 0.8rem;
              font-weight: 600;
              margin-left: 0.5rem;
            `}
          >
            {place.category_group_name}
          </div>
        </div>
        <div
          className={css`
            color: #515151;
            font-size: 0.9rem;
            margin-top: 0.3rem;
          `}
        >
          {place.road_address_name}
        </div>
      </div>
      {place.selected ? (
        <div
          className={css`
            background-color: #ffffff;
            box-shadow: 0 0 7px rgb(0, 0, 0, 0.15);
            border-bottom-left-radius: 0.6rem;
            border-bottom-right-radius: 0.6rem;
            padding: 1rem;
            box-sizing: border-box;
            width: 85%;
            position: relative;
            top: -0.4rem;
          `}
        >
          <div
            className={css`
              color: #515151;
              font-size: 1.1rem;
              font-weight: 500;
              margin-top: 0.5rem;
            `}
          >
            이런 제품은 어때요?
          </div>
          <div
            className={css`
              color: #b6b6b6;
              font-size: 0.8rem;
              font-weight: 600;
              margin-top: 0.4rem;
            `}
          >
            비슷한 구매 패턴을 가진 사용자 기반의 상품 추천입니다
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default PlaceInfo;
