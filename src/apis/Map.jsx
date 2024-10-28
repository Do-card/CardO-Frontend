import axios from "axios";

export const getPOIs = async (data) => {
  try {
    const response = await axios.get(
      "https://apis.openapi.sk.com/tmap/pois",
      {
        headers: {
          "Content-Type": "application/json",
          appKey: process.env.REACT_APP_TMAP_API_KEY, // 환경 변수에서 API 키를 가져오기
        },
        params: data,
      }
    );
    console.log("[IN FETCH]", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching POIs:", error);
  }
};
