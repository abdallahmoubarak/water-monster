import AnimatedLogo from "@/components/SVG/AnimatedLogo";

export default function Loading() {
  return (
    <>
      <div className="loading">
        <AnimatedLogo speed={1.5} />
      </div>
      <style jsx>{`
        .loading {
          width: 4rem;
          margin: auto;
        }
      `}</style>
    </>
  );
}
