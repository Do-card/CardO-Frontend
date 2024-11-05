import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import TodoCard from "../components/TodoCard";
import NavBar from "../components/NavBar";
import { getAllMarkers, useAddMarker } from "../apis/Todo";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

function TodoPage() {
  const [keyword, setKeyword] = useState();
  const [lastId, setLastId] = useState(0);
  const [limit, setLimit] = useState(10);

  const addNewMarker = useAddMarker();

  const [ref, inView] = useInView();

  

  const {
    isfetching,
    fetchNextPage,
    data: todoList,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["todoList"],
    queryFn: async ({ pageParam }) => {
      console.log(pageParam);
      const response = await getAllMarkers(keyword, pageParam.pageParam, limit);
      return response;
    },
    initialPageParam: {
      pageParam: 0,
    },
    getNextPageParam: (lastPage) => {
      if (lastPage && lastPage.length > 0) {
        return {
          pageParam: lastPage[lastPage.length - 1].id,
        };
      }
      return undefined;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      //검색
    }
  };

  const handleNewMarker = () => {
    const data = {
      name: "",
    };
    addNewMarker.mutate({ data: data });
  };

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f6f6f6;
        height: 100vh;
        padding: 0 2rem;
      `}
    >
      <div
        className={css`
          width: 100%;
          padding-top: 2rem;
          display: flex;
          float: left;
          font-size: 2.5rem;
          font-weight: bold;
        `}
      >
        Todo
      </div>
      <div
        className={css`
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          margin-top: 1rem;
        `}
      >
        <img
          src="/Add.svg"
          alt=""
          className={css`
            position: absolute;
            right: 0;
            top: -3.5rem;
            cursor: pointer;
          `}
          onClick={() => handleNewMarker()}
        />
        <input
          type="text"
          className={css`
            top: 1.5rem;
            width: 90%;
            height: 2.5rem;
            padding-inline: 1rem;
            border-radius: 0.8rem;
            border: solid #d9d9d9 0.1rem;
            box-shadow: 0 5.2px 6.5px rgb(0, 0, 0, 0.1);
            font-size: 1.2rem;
            color: #474747;
            &:focus {
              outline: none;
            }
          `}
          onKeyDown={handleKeyDown}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <img
          src="/search.svg"
          alt=""
          className={css`
            position: absolute;
            right: 1rem;
          `}
        />
      </div>
      <div
        className={css`
          margin-top: 1rem;
          width: 100%;
          height: 65vh;
          overflow: scroll;
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        {/* {todoList?.map((todo, index) => (
          <TodoCard Todo={todo} />
        ))} */}
        {todoList?.pages.map((page) =>
          page.map((data) => <TodoCard Todo={data} />)
        )}
        {todoList && <div ref={ref}></div>}
      </div>
      <NavBar isSelected={"Todo"} />
    </div>
  );
}
export default TodoPage;
