import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

function TodoCard({ Todo }) {
  const navigator = useNavigate();
  const ToLocation = (location) => {
    if (location) {
      // 위치 넘기기
    } else {
      // 위치 추가 페이지로
      navigator("/addloc");
    }
  };
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
              background-color: ${Todo.colorBackground};
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
              {Todo.name}
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
              cursor: pointer;
            `}
            onClick={() => ToLocation(Todo.location)}
          >
            {/* 위치 있으면 위치 이름 띄우고 없으면 위치 추가 */}
            {Todo.location ? Todo.location : "위치 추가"}
          </div>
        </div>
        <div
          className={css`
            background-color: ${Todo.colorBackground};
            border-bottom-left-radius: 0.7rem;
            border-bottom-right-radius: 0.7rem;
            border-top-right-radius: 0.7rem;
            padding: 1rem 0.8rem;
          `}
        >
          {/* Todo List */}
          {Todo.items.map((todo, index) => (
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
                {todo.name}
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
              background-color: ${Todo.colorBackground};
            `}
          />
        </div>
      </div>
    </div>
  );
}
export default TodoCard;
