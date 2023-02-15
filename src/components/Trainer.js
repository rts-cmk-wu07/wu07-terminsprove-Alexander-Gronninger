import useFetchTrainer from "../hooks/useFetchTrainer";

const Trainer = ({ trainerId }) => {
  const { content: trainerContent } = useFetchTrainer({ trainerId });

  return (
    <>
      <div className="">
        <p className="text-normal">Trainer</p>
        <div className="flex">
          <div className="h-[80px] w-[80px] rounded-3xl overflow-hidden">
            <img
              className="origin-top scale-[1]"
              src={trainerContent && trainerContent.asset.url}
              alt={trainerContent && trainerContent.trainerName}
            />
          </div>
          <p className="mt-4 ml-8 text-small">
            {trainerContent && trainerContent.trainerName}
          </p>
        </div>
      </div>
    </>
  );
};

export default Trainer;
