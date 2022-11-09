import { getGeoLocation } from "@/utils/getGeoLocation";
import { styles } from "@/utils/styles";
import { useRouter } from "next/router";
import { Map, Marker, Overlay, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { useEffect, useState } from "react";
import { BiTargetLock } from "react-icons/bi";
import { FaRoute } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";

export default function Location() {
  const currentLocation = [
    parseFloat(localStorage.getItem("lat")),
    parseFloat(localStorage.getItem("long")),
  ];
  const [center, setCenter] = useState(currentLocation);
  const [zoom, setZoom] = useState(17);

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
          {containersLoc.map((container) => (
            <Marker
              width={50}
              anchor={container.location}
              onClick={() => {
                setZoom(18);
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
          {containersLoc.map((container) => (
            <Overlay anchor={container.location} offset={[80, 155]}>
              <Pop
                level={container.water_level}
                dist={container.location}
                current={currentLocation}
                requested={container.requested}
              />
            </Overlay>
          ))}
          {/* owner marker */}
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
          width: 3rem;
          height: 3rem;
          font-size: 2rem;
          position: absolute;
          bottom: 1.6rem;
          right: 1rem;
          z-index: 401;
          background: white;
          color: #333;
          border: 1px solid gray;
          ${styles.borderRadius50percent};
          ${styles.flexBothcenter};
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

const containersLoc = [
  { location: [33.86101, 35.5182022], water_level: 52, requested: true },
  { location: [33.85101, 35.5152022], water_level: 20 },
  { location: [33.87101, 35.5282022], water_level: 30 },
];

const Pop = ({ level, dist, current, requested }) => {
  const router = useRouter();
  return (
    <>
      <div className="content">
        {requested && <div className="requested">Filling requested</div>}
        <div>{(3000 * level) / 100} liter is empty.</div>
        <div className="icons-container">
          <div className="icon">
            <BsFillChatFill />
          </div>
          <div
            className="icon"
            onClick={() =>
              router.push(
                `https://www.google.com/maps/dir/${current[0]},${current[1]}/${dist[0]},${dist[1]}/data=!4m2!4m1!3e0`,
              )
            }>
            <FaRoute />
          </div>
          <div className="icon GO">GO</div>
        </div>
      </div>

      <style jsx>{`
        .content {
          background: white;
          padding: 0.4rem 0.6rem;
          ${styles.borderRadius1rem};
          ${styles.boxshadow};
          color: ${styles.primaryColor};
          border: 1px solid ${styles.primaryColor};
          font-size: 1rem;
          position: relative;
        }
        .content:before {
          content: "";
          position: absolute;
          top: 100%;
          left: 70px;
          width: 0;
          border-top: 10px solid ${styles.primaryColor};
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
        }
        .requested {
          color: ${styles.secondaryColor};
        }
        .icons-container {
          ${styles.flexBothcenter};
          gap: 1rem;
          padding-top: 0.5rem;
        }
        .icon {
          ${styles.flexBothcenter};
          ${styles.borderRadius50percent};
          color: white;
          background: ${styles.primaryColor};
          width: 2.6rem;
          height: 2.6rem;
          cursor: pointer;
          font-weight: bold;
          border: 1px solid ${styles.primaryColor};
        }
        .GO {
          background: white;
          color: ${styles.primaryColor};
        }
      `}</style>
    </>
  );
};
