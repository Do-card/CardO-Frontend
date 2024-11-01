import { css } from "@emotion/css";

function TodoCard() {
  const todoList = ["사과 사기", "국수 사기", "양배추 사기"];
  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        margin-top: 1rem;
      `}
    >
      {/* 삭제 버튼 */}
      <img
        src="/X.svg"
        alt=""
        className={css`
          position: absolute;
          right: 0.5rem;
          width: 1.5rem;
        `}
      />

      {/* ToDo 파일 */}
      <div
        className={css`
          width: 100%;
        `}
      >
        {/* Todo Header */}
        <div
          className={css`
            display: flex;
            align-items: end;
          `}
        >
          <div
            className={css`
              display: inline-flex;
              align-items: center;
              background-color: #ffffff;
              padding-left: 0.5rem;
              padding-right: 1rem;
              padding-block: 0.3rem;
              border-top-right-radius: 0.7rem;
              border-top-left-radius: 0.7rem;
            `}
          >
            {/* 즐겨찾기 여부 */}
            <img src="/star_grey.svg" alt="" />
            {/* Todo 카테고리 이름 */}
            <div
              className={css`
                margin-left: 0.4rem;
                font-size: 1.2rem;
                font-weight: 800;
              `}
            >
              이름
            </div>
          </div>
          <div
            className={css`
              content: "";
              height: 10px;
              width: 10px;
              background: radial-gradient(
                circle at top right,
                transparent 70%,
                white 50%
              );
            `}
          ></div>
          {/* 위치 */}
          <div
            className={css`
              color: #959595;
              font-size: 0.8rem;
              font-weight: 500;
              margin-left: 0.5rem;
              margin-bottom: 0.5rem;
            `}
          >
            하나로마트
          </div>
        </div>
        <div
          className={css`
            background-color: #ffffff;
            border-bottom-left-radius: 0.7rem;
            border-bottom-right-radius: 0.7rem;
            border-top-right-radius: 0.7rem;
            padding: 1rem 0.8rem;
          `}
        >
          {/* Todo List */}
          {todoList.map((todo, index) => (
            <div
              key={index}
              className={css`
                display: flex;
                margin-bottom: 0.5rem;
              `}
            >
              <img src="/Unselected.svg" alt="" className={css``} />
              <div
                className={css`
                  margin-left: 0.5rem;
                `}
              >
                {todo}
              </div>
            </div>
          ))}

          {/* Todo 추가 */}
          <input
            type="text"
            placeholder="추가..."
            className={css`
              outline: none;
              border: none;
              font-size: 1rem;
              margin-top: 0.3rem;
              color: #959595;
            `}
          />
        </div>
      </div>
      
    </div>
  );
}
export default TodoCard;
