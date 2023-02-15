import { useState } from "react";
import useFetchClasses from "../hooks/useFetchClasses";
import Carousel from "../templates/Carousel";
import ClassCard from "../templates/ClassCard";

const Home = () => {
  const { content: classList } = useFetchClasses();

  const selectRandomIndex = Math.floor(Math.random() * classList?.length);

  const [height, setHeight] = useState("auto");

  function handleImageLoad(event) {
    const width = event.target.width;
    setHeight(`${width}px`);
  }

  return (
    <>
      <section className="mx-4">
        <div className="grid">
          <div
            style={{ height: height }}
            className="w-auto rounded-3xl row-start-1 row-end-2 col-start-1 col-end-2 overflow-hidden"
          >
            <img
              src={classList && classList[selectRandomIndex]?.asset?.url}
              alt={classList && classList[selectRandomIndex]?.className}
              className="origin-top scale-150 w-full h-auto"
              onLoad={handleImageLoad}
            />
          </div>
          <h2 className="z-10 row-start-1 row-end-2 col-start-1 col-end-2 text-white text-big self-end ml-8 mb-16 w-[75vw]">
            {classList && classList[selectRandomIndex]?.className}
          </h2>
        </div>
        <div>
          <h2 className="text-normal mt-2">Classes for you</h2>
          <Carousel>
            {classList?.map((classObject, i) => {
              console.log(classObject);
              return (
                <ClassCard
                  image={classObject?.asset?.url}
                  title={classObject?.className}
                  classId={classObject?.id}
                  key={classObject?.id}
                />
              );
            })}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Home;
