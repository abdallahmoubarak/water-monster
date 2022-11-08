import { getGeoLocation } from "@/utils/getGeoLocation";
import { styles } from "@/utils/styles";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { useEffect, useState } from "react";
import { BiTargetLock } from "react-icons/bi";

export default function Location() {
  const currentLocation = [
    parseFloat(localStorage.getItem("lat")),
    parseFloat(localStorage.getItem("long")),
  ];
  const [center, setCenter] = useState(currentLocation);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    getGeoLocation();
  }, [currentLocation]);

  return (
    <>
      <div className="map-container">
        <div
          className="current-location"
          onClick={() => {
            setZoom(19);
            setCenter(currentLocation);
          }}>
          <BiTargetLock />
        </div>
        <Map
          provider={osm}
          center={center}
          zoom={zoom}
          onBoundsChanged={({ center, zoom }) => {
            setCenter(center);
            setZoom(zoom);
          }}>
          <ZoomControl />
          <Marker
            width={50}
            anchor={currentLocation}
            onClick={() => {
              setZoom(19);
              setCenter(currentLocation);
            }}
          />
          <Marker width={50} anchor={currentLocation}>
            <img
              className="marker-img"
              src="/svg/tankmarker.svg"
              alt=""
              width={50}
            />
          </Marker>
          {containersLoc.map((container) => (
            <Marker
              width={50}
              anchor={container.location}
              onClick={() => {
                setZoom(19);
                setCenter(container.location);
              }}
            />
          ))}
          {containersLoc.map((container) => (
            <Marker width={50} anchor={container.location}>
              <img
                className="marker-img"
                src="/svg/containermarker.svg"
                alt=""
                width={50}
              />
            </Marker>
          ))}
        </Map>
      </div>

      <style jsx>{`
        .map-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          -ms-scroll-chaining: none;
          overscroll-behavior: none;
          position: relative;
          ${styles.boxshadow}
        }
        .current-location {
          width: 2.6rem;
          height: 2.6rem;
          font-size: 1.8rem;
          position: absolute;
          top: 0.6rem;
          right: 0.6rem;
          z-index: 401;
          background: #f9f9fa;
          color: #555;
          border: 1px solid gray;
          border-radius: 50%;
          ${styles.flexBothcenter};
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

const containersLoc = [{ location: [33.86101, 35.5182022] }];
