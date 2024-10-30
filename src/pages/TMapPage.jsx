import { css } from "@emotion/css";
import { useEffect, useState, useRef } from "react";
import NavBar from "../components/NavBar";
import { getPOIs } from "../apis/Map";
// import { TMap, TMapLatLng } from "@/types";

const { Tmapv2 } = window;

function TMapPage() {
  console.log(window.Tmapv2);
  var [map, setMap] = useState(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]); // 마커를 상태 대신 useRef로 관리

  const [markers, setMarkers] = useState([]); // 장소 정보 관리
  const [keyword, setKeyword] = useState(""); // 검색어
  const [selectedCategory, setSelectedCategory] = useState("카페");
  const [clickedPlace, setClickedPlace] = useState(null); // 선택된 장소

  useEffect(() => {
    const initTmap = () => {
      if (!window.Tmapv2) {
        // Tmap API가 아직 로드되지 않았을 경우, 500ms 후 다시 시도
        setTimeout(initTmap, 500);
        return;
      }

      // Tmap API가 로드된 경우 맵 초기화 진행
      const map = new window.Tmapv2.Map("map_div", {
        center: new Tmapv2.LatLng(37.5652045, 126.98702028),
        width: "100%",
        height: "100vh",
        zoom: 17,
      });
      map.setOptions({ zoomControl: false });
      setMap(map);
    };

    console.log(markersRef);
    initTmap();
  }, []);

  // map 설정이 완료된 후 초기 마커 추가
  useEffect(() => {
    if (window.Tmapv2 && map) {
      addInitialMarker();
    }
  }, [map]);

  const addInitialMarker = () => {
    const markerPosition = new window.Tmapv2.LatLng(37.5652045, 126.98702028);
    const initialMarker = new window.Tmapv2.Marker({
      position: markerPosition,
      icon: "/Marker.png",
      iconSize: new window.Tmapv2.Size(24, 38),
      title: "Start Marker",
      map: map, // 지도에 마커 추가
    });
    markersRef.current.push(initialMarker); // 초기 마커를 ref 배열에 저장
    console.log("Initial marker added:", initialMarker);
  };

  const clearMarkers = () => {
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];
  };

  const search = async () => {
    if (!map) return;
    console.log(markers);

    const data = {
      searchKeyword: keyword,
      resCoordType: "EPSG3857",
      reqCoordType: "WGS84GEO",
      count: 10,
    };

    const response = await getPOIs(data);
    var resultpoisData = response.searchPoiInfo.pois.poi;

    console.log("map : ", map);

    // 기존 마커 제거
    clearMarkers();

    var positionBounds = new Tmapv2.LatLngBounds(); //맵에 결과물 확인 하기 위한 LatLngBounds객체 생성

    resultpoisData.forEach((poi) => {
      console.log("poi : ", poi);
      const pointCng = new Tmapv2.Point(
        Number(poi.noorLon),
        Number(poi.noorLat)
      );
      const projectionCng = new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(
        pointCng
      );
      const lat = parseFloat(projectionCng._lat.toFixed(6));
      const lon = parseFloat(projectionCng._lng.toFixed(6));
      const markerPosition = new Tmapv2.LatLng(lat, lon);
      console.log("lat : ", lat);
      console.log("lon : ", lon);

      const newMarker = new Tmapv2.Marker({
        position: markerPosition,
        icon: "/Marker.png",
        iconSize: new Tmapv2.Size(24, 38),
        title: poi.name,
        map: map,
      });
      console.log("marker : ", newMarker);
      markersRef.current.push(newMarker); // 마커를 ref 배열에 추가
      positionBounds.extend(markerPosition); // LatLngBounds의 객체 확장
      console.log("Marker added at position:", markerPosition);
    });

    map.fitBounds(positionBounds); // 지도 중심과 확대 조정

    // console.log("test : ", markersRef);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // setKeyword(e.target.value);
      search();
    }
  };

  return (
    <div
      className={css`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100vh;
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 1.5rem;
          width: 90%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          z-index: 2;
        `}
      >
        <div
          className={css`
            position: relative;
            display: flex;
            align-items: center;
            width: 100%;
          `}
        >
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
              z-index: 2;
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
              z-index: 2;
            `}
            onClick={() => search()}
          />
        </div>
        <div
          className={css`
            margin-top: 1rem;
            width: 90%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            z-index: 2;
          `}
        >
          {["카페", "음식점", "편의점", "주유소", "문화시설", "대형마트"].map(
            (text, index) => (
              <div
                key={index}
                className={css`
                  --height: 2rem;
                  background-color: ${selectedCategory === text
                    ? "#979797"
                    : "white"};
                  line-height: var(--height);
                  height: var(--height);
                  padding: 0 1rem;
                  margin-right: 0.5rem;
                  margin-bottom: 0.4rem;
                  border-radius: 1rem;
                  color: ${selectedCategory === text ? "white" : "979797"};
                  box-shadow: 0 5.2px 6.5px rgb(0, 0, 0, 0.1);
                  cursor: pointer;
                `}
                onClick={(e) => {
                  setSelectedCategory(text);
                }}
              >
                {text}
              </div>
            )
          )}
        </div>
      </div>
      <div
        id="map_div"
        // onCreate={() => initTmap()}
        className={css`
          width: 100%;
          height: 100vh;
        `}
        // ref={mapRef}
      />

      <NavBar />
    </div>
  );
}

export default TMapPage;
