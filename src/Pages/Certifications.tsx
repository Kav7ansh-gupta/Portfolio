import DomeGallery from "../Components/DomeGallery";
import { cirtificates } from "@/Assets/assets";

const Certifications = () => {
  const items = [
    {
      src: cirtificates.mongodb,
    },
    {
      src: cirtificates.bgmi,
    },
    {
      src: cirtificates.hackovision,
    },
  ];
  return (
    <div className="dark:text-white text-black p-5 md:px-16 my-20">
      <div className="">
        <h1 className="text-5xl font-semibold mb-10">My Cirtificates</h1>
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
        <div className=" hidden md:block max-w-screen h-screen p-0 md:p-5  border-purple-400/85 backdrop-blur-[2px] rounded-2xl border-4 mt-14">
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
