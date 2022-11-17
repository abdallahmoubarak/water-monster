import ContentLoader from "react-content-loader";

export default function ContainerLoader() {
  return (
    <>
      <div className="loader">
        <ContentLoader
          speed={2}
          width={360}
          height={520}
          viewBox="0 0 360 520"
          backgroundColor="#f3f3f3"
          foregroundColor="#dbdbdb">
          <rect x="5" y="8" rx="16" ry="16" width="342" height="507" />
        </ContentLoader>
      </div>
      <style jsx>{`
        .loader {
          max-width: 22rem;
          margin: auto;
        }
      `}</style>
    </>
  );
}
