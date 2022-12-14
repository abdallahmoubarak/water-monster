"use client";
import { getGeoLocation } from "@/utils/getGeoLocation";
import { styles } from "@/utils/styles";
import { Map, Marker, Overlay, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { useMemo, useState } from "react";
import { BiTargetLock } from "react-icons/bi";
import Image from "next/image";
import Pop from "@/components/MapPop";
import { useGetMapContainers } from "@/hooks/useContainer";
import { client } from "pages/_app";
import Alert from "@/components/Alert";

export default function MapPage({ setPage, setChatUser }) {
  const currentLocation = useMemo(
    () => [
      parseFloat(localStorage.getItem("lat")),
      parseFloat(localStorage.getItem("long")),
    ],
    [],
  );
  const [alertMsg, setAlertMsg] = useState("");
  const [center, setCenter] = useState(currentLocation);
  const [zoom, setZoom] = useState(17);

  const { data: containers } = useGetMapContainers();
  const userType = client.getQueryData(["User"]).type;

  getGeoLocation();

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
          {containers
            ?.filter((container) => container?.location?.longitude)
            .map((container, i) => (
              <Marker
                key={i}
                width={50}
                anchor={[
                  container?.location?.longitude,
                  container?.location?.latitude,
                ]}
                onClick={() => {
                  setZoom(18);
                  setCenter([
                    container?.location?.longitude,
                    container?.location?.latitude,
                  ]);
                }}
              />
            ))}
          {containers
            ?.filter((container) => container?.location?.longitude)
            .map((container, i) => (
              <Marker
                key={i}
                width={50}
                anchor={[
                  container?.location?.longitude,
                  container?.location?.latitude,
                ]}>
                <Image
                  className="marker-img"
                  src={"/svg/containermarker.svg"}
                  alt=""
                  width={50}
                  height={60}
                />
              </Marker>
            ))}
          {containers
            ?.filter((container) => container?.location?.longitude)
            .map((container, i) => {
              let y = 190;
              if (container?.requests[0]?.state === "reserved") y = 145;
              if (!container?.requests[0]) y = 170;
              if (userType === "Admin") y = 130;
              return (
                <Overlay
                  key={i}
                  anchor={[
                    container?.location?.longitude,
                    container?.location?.latitude,
                  ]}
                  offset={[80, y]}>
                  <Pop
                    container={container}
                    currentLocation={currentLocation}
                    setPage={setPage}
                    setChatUser={setChatUser}
                    setAlertMsg={setAlertMsg}
                  />
                </Overlay>
              );
            })}
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
            <Image
              className="marker-img"
              src={
                userType === "Provider"
                  ? "/svg/tankmarker.svg"
                  : "/svg/admin-marker.svg"
              }
              alt=""
              width={50}
              height={60}
            />
          </Marker>
        </Map>
        <Alert alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
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
