import { css } from "@emotion/css";
import { useEffect, useState, useRef } from "react";
import NavBar from "../components/NavBar";
import TrendCard from "../components/TrendCard";
import TodoMain from "../components/TodoMain";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { getRepresentiveCard } from "../apis/Main";
import CardModal from "../components/CardModal";

function HomePage() {
  const [card, setCard] = useState();
  const [showModal, setShowModal] = useState(false);
  const [isSelected, setIsSelected] = useState(10000);
  const navigate = useNavigate();

  // console.log(card);
  // if(card) setHasCard(true);
  // else setHasCard(false);

  useEffect(() => {
    getRepresentiveCard().then((res) => {
      if (res){
        setCard(res.result);
      }
      return res;
    });
  }, []);

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        background-color: #f6f6f6;
        padding: 0 2rem;
      `}
    >
      {isSelected && showModal && <CardModal setShowModal={setShowModal} data={card}></CardModal>}
      <div
        className={css`
          width: 100%;
          display: flex;
          float: left;
          font-size: 1.4rem;
          font-weight: 600;
          margin: 1.5rem 0 0.5rem 0;
          cursor: Default;
        `}
      >
        실시간 소비 트렌트
      </div>
      {/* Map Component */}
      <TrendCard />
      <div
        className={css`
          display: flex;
          margin-top: 2em;
          width: 100%;
        `}
      >
        <TodoMain />
      </div>
      <div
        className={css`
          display: flex;
          margin-top: 1.5rem;
          width: 100%;
        `}
      >
        {!card ? (
          <div
            className={css`
              margin-top: 0.5rem;
              display: flex;
              width: 100%;
            `}
          >
            <div
              className={css`
                padding: 1.5rem;
                height: 11rem;
                width: 100%;
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
                <span
                  className={css`
                    display: flex;
                    justify-content: center;
                    padding-bottom: 1rem;
                    font-size: 1rem;
                  `}
                >
                  등록된 카드가 없습니다.
                </span>
                <button
                  className={css`
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
                  `}
                  onClick={() => navigate("/card")}
                >
                  카드 등록하러 가기
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={css`
              display: flex;
              width: 100%;
            `}
          >
            <div
              className={css`
                display: flex;
                width: 90%;
                height: auto;
              `}
            >
              <div
                className={css`
                  display: flex;
                  position: relative;
                  left: -3%;
                  scale: 0.95;
                  z-index: 1;
                `}
              >
                <Card
                  data={card}
                  setShowModal={setShowModal}
                  isSelected={true}
                  isRepresentativeSelected={false}
                />
              </div>
            </div>
            <div
              className={css`
                display: flex;
                justify-content: center;
                align-items: center;
                width: 10%;
                z-index: 0;
              `}
            >
              <div
                className={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  position: relative;
                  padding: 2.5rem 0.4rem;
                  border-radius: 0 1rem 1rem 0;
                  writing-mode: vertical-lr;
                  color: #555555;
                  background-color: #b0ffa3;
                  box-shadow: 0 0 5px rgb(0, 0, 0, 0.15);
                  font-weight: 700;
                  font-size: 0.9rem;
                  cursor: Pointer;
                `}
                onClick={() => navigate("/card")}
              >
                카드 관리
              </div>
            </div>
          </div>
        )}
      </div>

      <NavBar isSelected={"Home"} />
    </div>
  );
}

export default HomePage;
