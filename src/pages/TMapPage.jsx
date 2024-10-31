import { css } from "@emotion/css";
import { useEffect, useState, useRef } from "react";
import NavBar from "../components/NavBar";
import { getPOIs } from "../apis/Map";

function TMapPage() {
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const [keyword, setKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("카페");

  const initTmap = () => {
    if (mapRef.current) {
      mapRef.current.destroy(); // 기존 map 인스턴스 제거
    }

    const newMap = new window.Tmapv2.Map("map_div", {
      center: new window.Tmapv2.LatLng(37.566482038912525, 126.98185405041606),
      width: "100%",
      height: "100vh",
      zoom: 17,
    });
    mapRef.current = newMap;
    addInitialMarker(newMap);
  };

  useEffect(() => {
    const loadTmap = () => {
      if (!window.Tmapv2) {
        setTimeout(loadTmap, 500);
        return;
      }
      initTmap();
    };
    loadTmap();
  }, []);

  const addInitialMarker = (mapInstance) => {
    const marker = new window.Tmapv2.Marker({
      position: new window.Tmapv2.LatLng(37.566482038912525, 126.98185405041606),
      icon: "/Marker.png",
      iconSize: new window.Tmapv2.Size(24, 38),
      title: "Start Marker",
      map: mapInstance,
    });

    markersRef.current.push(marker);
  };

  const clearMarkers = () => {
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];
  };

  const search = async () => {
    initTmap(); // 새로운 지도 생성 및 초기화

    const data = {
      searchKeyword: keyword,
      resCoordType: "EPSG3857",
      reqCoordType: "WGS84GEO",
      count: 3,
    };

    const response = await getPOIs(data);
    const resultpoisData = response.searchPoiInfo.pois.poi;

    clearMarkers();

    const positionBounds = new window.Tmapv2.LatLngBounds();

    resultpoisData.forEach((poi) => {
      const noorLat = Number(poi.noorLat);
      const noorLon = Number(poi.noorLon);
      const pointCng = new window.Tmapv2.Point(noorLon, noorLat);
      const projectionCng = new window.Tmapv2.Projection.convertEPSG3857ToWGS84GEO(pointCng);
      const markerPosition = new window.Tmapv2.LatLng(projectionCng._lat, projectionCng._lng);

      const marker = new window.Tmapv2.Marker({
        position: markerPosition,
        map: mapRef.current,
      });

      positionBounds.extend(markerPosition);
      markersRef.current.push(marker);
    });

    mapRef.current.fitBounds(positionBounds);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
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
                onClick={() => {
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
        className={css`
          width: 100%;
          height: 100vh;
        `}
      />
      <NavBar />
    </div>
  );
}

export default TMapPage;
