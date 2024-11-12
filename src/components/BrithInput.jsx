import { css } from "@emotion/css";
function InfoInput({ title, type, placeholder, onChange, children, onKeyDown, value, onClick }) {
  const date = value
    ? value.getFullYear() +
      "-" +
      (value.getMonth() > 9 ? "" : "0") +
      value.getMonth() +
      "-" +
      (value.getDate() > 9 ? "" : "0") +
      value.getDate()
    : "";
  return (
    <div
      className={css`
        position: relative;
        padding-top: 1rem;
        width: 100%;
      `}
    >
      <div
        className={css`
          color: #959595;
          font-weight: bold;
          font-size: 1.2rem;
          cursor: Default;
        `}
      >
        {title}
      </div>
      <input
        className={css`
          width: 90%;
          border: none;
          border-bottom: solid #959595;
          padding-top: 1rem;
          padding-bottom: 0.3rem;
          font-weight: 600;
          outline: none;
          color: #959595;
          font-size: 0.95rem;
          &:focus {
            border-bottom: solid #b0ffa3;
          }
          &::placeholder {
            font-weight: 600;
            color: #c6c6c6;
          }
        `}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={date}
        readOnly={true}
        onClick={() => onClick(true)}
      />
      {children}
    </div>
  );
}
export default InfoInput;