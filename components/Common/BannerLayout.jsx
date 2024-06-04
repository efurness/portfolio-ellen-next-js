const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portfolio-ellen-next-js" : "";
const BannerLayout = ({ children }) => {
  return (
    <div
      className="relative w-full h-80 bg-fixed z-10"
      style={{
        background: `url(${basePath}/images/bigsky.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full">
        <div className=" w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default BannerLayout;
