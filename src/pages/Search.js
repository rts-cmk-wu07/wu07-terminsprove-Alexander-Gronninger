import { RiSearchLine } from "react-icons/ri";
import Trainer from "../components/Trainer";
import useFetchClasses from "../hooks/useFetchClasses";
import useFetchTrainers from "../hooks/useFetchTrainers";
import Carousel from "../templates/Carousel";
import ClassCard from "../templates/ClassCard";

const Search = () => {
  const { content: classList } = useFetchClasses();
  const { content: trainerList } = useFetchTrainers();

  return (
    <>
      <div className="mx-4">
        <form className="flex bg-customGray border-[1px] border-gray-300 rounded-xl p-4 place-items-center">
          <RiSearchLine className="text-gray-400" size="24px" />
          <input
            placeholder="Search class"
            className="bg-customGray ml-4 placeholder-gray-400 text-small"
          ></input>
        </form>
      </div>
      <div className="mx-4 mb-12">
        <h2 className="text-normal mt-2 mb-8">Popular Classes</h2>
        <Carousel>
          {classList?.map((classObject, i) => {
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
        <h2 className="text-normal mt-2 mb-8">Popular Trainers</h2>
        <div className="flex flex-col gap-4">
          {trainerList?.map((trainer, i) => {
            console.log(trainer);
            return <Trainer trainerId={trainer.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
