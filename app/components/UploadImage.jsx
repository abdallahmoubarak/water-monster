import { styles } from "@/utils/styles";
import Image from "next/image";

export default function UploadImage({
  currentUser,
  image,
  setImage,
  setImg64,
}) {
  return (
    <>
      <div className="upload-img-container">
        <div>
          <label htmlFor="upload-img-input" className="upload-img-label">
            <Image
              src={image || currentUser?.profile_url || ""}
              loader={() => image || currentUser?.profile_url || ""}
              alt=""
              width="160"
              height="160"
            />
          </label>
          <input
            className="upload-img-input"
            id="upload-img-input"
            type="file"
            accept="image/png, image/gif, image/jpeg"
            onChange={(e) => {
              var file = e.target.files[0];
              const reader = new FileReader();
              reader.onload = () => {
                reader.readyState === 2 && setImage(reader.result);
                reader.readyState === 2 &&
                  setImg64(reader.result.split("base64,")[1]);
              };
              if (file) {
                reader.readAsDataURL(file);
              } else {
                setImage();
              }
            }}
          />
        </div>
      </div>
      <style jsx="true">{`
        .upload-img-container {
          width: 10rem;
          height: 10rem;
          margin: auto;
          background: ${styles.primaryColor};
          ${styles.borderRadius50percent}
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .upload-img-input {
          opacity: 0;
          position: absolute;
          z-index: -1;
          width: 5rem;
        }

        .upload-img-label {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          padding: 0;
          z-index: 1;
          cursor: pointer;
          ${styles.whiteProfileBackground}
        }
      `}</style>
    </>
  );
}
