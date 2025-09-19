import TrueFocus from "./animate-ui/text/ShinyText";
import DomeGallery from "./DomeGallery";

const Certifications = () => {
  const items = [
    {
      src: "src/assets/MongoDB.png",
    },
  ];
  return (
    <div className="">
      <div className=" max-w-screen m-6 ">
        <TrueFocus
          sentence="My Certificates"
          manualMode={false}
          blurAmount={5}
          borderColor="purple"
          animationDuration={1.4}
          pauseBetweenAnimations={3}
        />
        <div className="md:hidden min-w-20 max-w-screen h-90 p-3 md:p-5 border-purple-400/85 backdrop-blur-[2px] rounded-2xl border-5 shadow-purple-300 shadow-md box mt-7">
          <DomeGallery
            fit={5}
            images={items}
            grayscale={false}
            minRadius={800}
            openedImageWidth="auto"
            openedImageHeight="auto"
            dragSensitivity={50}
          />
        </div>
        <div className=" hidden md:block max-w-screen h-screen p-0 md:p-5  border-purple-400/85 backdrop-blur-[2px] rounded-2xl border-4 mt-7">
          <DomeGallery
            fitBasis="auto"
            images={items}
            grayscale={false}
            minRadius={1800}
            openedImageWidth="auto"
            dragSensitivity={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Certifications;
