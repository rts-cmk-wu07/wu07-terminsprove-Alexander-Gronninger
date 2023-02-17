import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import SearchCard from "../components/SearchCard";
import Trainer from "../components/Trainer";
import SearchQuery from "../functions/SearchQuery";
import useFetchClasses from "../hooks/useFetchClasses";
import useFetchTrainers from "../hooks/useFetchTrainers";
import Carousel from "../templates/Carousel";
import ClassCard from "../templates/ClassCard";

const Search = () => {
  const { content: classList } = useFetchClasses();
  const { content: trainerList } = useFetchTrainers();

  const [searchTerm, setSearchTerm] = useState();

  let searchResults = SearchQuery(searchTerm);

  return (
    <>
      <div className="mx-4">
        <form className="flex bg-customGray border-[1px] border-gray-300 rounded-xl p-4 place-items-center">
          <RiSearchLine className="text-gray-400" size="24px" />
          <input
            placeholder="Search class"
            className="bg-customGray ml-4 placeholder-gray-400 text-small outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </form>
      </div>
      <section className="mx-4 mb-12">
        {!searchTerm && (
          <>
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
                return <Trainer trainerId={trainer.id} key={i} />;
              })}
            </div>
          </>
        )}
        {!searchResults[0] ? (
          <p className="text-normal text-center mt-8">
            Your search did not give any results. Try to search for something
            else.
          </p>
        ) : (
          <div className="flex gap-2 flex-col mt-4">
            {searchResults.map((searchResult, i) => {
              return <SearchCard data={searchResult} key={i} />;
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default Search;
