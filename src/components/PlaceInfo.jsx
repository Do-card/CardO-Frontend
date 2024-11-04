import { css } from "@emotion/css";
import { useState } from "react";

function PlaceInfo({ place }) {
  return (
    <div
      className={css`
        width: 85%;
        background-color: white;
        padding-inline: 1rem;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        padding-block: 1rem;
        border: 1px solid white;
        border-radius: 0.6rem;
        box-shadow: 0 0 7px rgb(0, 0, 0, 0.15);
        box-sizing: border-box;
        margin-top: 1.3rem;
      `}
    >
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
  );
}
export default PlaceInfo;
