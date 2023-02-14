import { HiMenuAlt3 } from "react-icons/hi";
import { IoTriangle } from "react-icons/io5";
import Carousel from "../templates/Carousel";
import ClassCard from "../templates/ClassCard";

const Home = () => {
  return (
    <>
      <div className="flex place-content-between mt-4 mb-4 mx-4">
        <IoTriangle size="30px" className="mt-8 text-customGray" />
        <h1 className="text-normal">Popular Classes</h1>
        <HiMenuAlt3 size="30px" className="mt-8 text-customGray" />
      </div>
      <section className="mx-4 mb-8">
        <div className="grid">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="w-full rounded-3xl row-start-1 row-end-2 col-start-1 col-end-2"
          />
          <h2 className="row-start-1 row-end-2 col-start-1 col-end-2 text-white text-big self-end ml-8 mb-16 w-[75vw]">
            Lorem Ipsum
          </h2>
        </div>
        <div>
          <h2 className="text-normal mt-2">Classes for you</h2>
          <Carousel>
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Home;
