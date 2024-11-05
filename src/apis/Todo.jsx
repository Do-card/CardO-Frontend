import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "./Axios";

export const getAllMarkers = async (keyword, pageParam, limit) => {
  try {
    console.log("pageParam : ", pageParam);
    const response = await axios
      .get(
        `/markers/all?${keyword ? "keyword=" + keyword + "&" : ""}${
          pageParam > -1 ? "lastId=" + pageParam + "&" : ""
        }${limit ? "limit=" + limit : ""}`
      )
      .then((res) => {
        console.log("[Todo all response] ", res.data.result.content);
        return res.data.result.content;
      });
    return response;
  } catch (error) {
    console.error("getting todo list failed : ", error);
  }
};

export const addMarker = async (data) => {
  try {
    const response = await axios.post("/markers", data).then((res) => {
      console.log("[add New Marker Axios] : ", res);
    });
  } catch (error) {
    console.error("add marker error");
  }
};

export const useAddMarker = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: (params) => addMarker(params.data),
    onSuccess: () => {
      queryClient.invalidateQueries("todoList");
    },
  });
  return mutate;
};

export const deleteMarker = async (id) => {
  try {
    const response = await axios.delete(`/markers/${id}`).then((res) => {
      console.log("[Delete Marker] ", res);
    });
  } catch (error) {
    console.error(error);
  }
};

export const useDeleteMarker = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: (params) => deleteMarker(params.id),
    onSuccess: () => {
      queryClient.invalidateQueries("todoList");
    },
  });
  return mutate;
};

export const patchFavorite = async (id, data) => {
  try {
    const response = await axios
      .patch(`/markers/${id}/favorite`, data)
      .then((res) => {
        console.log("[Change Favorite]", res);
      });
  } catch (error) {
    console.error("patch Favorite error : ", error);
  }
};

export const usePatchFavorite = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: (params) => patchFavorite(params.id, params.data),
    onSuccess: () => {
      queryClient.invalidateQueries("todoList");
    },
  });
  return mutate;
};
