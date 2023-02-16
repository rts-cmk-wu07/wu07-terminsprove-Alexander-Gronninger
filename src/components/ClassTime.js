const ClassTime = ({ classContent }) => {
  return (
    <section className="mx-6 mt-4 mb-12">
      <h2 className="text-normal">Schedule</h2>
      <div className="flex text-small justify-between">
        <p>{classContent && classContent.classDay}</p>
        <p>{classContent && classContent.classTime}</p>
      </div>
      <p className="text-small mt-6">
        {classContent && classContent.classDescription}
      </p>
    </section>
  );
};

export default ClassTime;
