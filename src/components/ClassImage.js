const ClassImage = ({ image, optionalCss }) => {
  return (
    <>
      <img
        src={image}
        alt=""
        className={"rounded-3xl w-[150px] h-[150px]" + optionalCss}
      />
    </>
  );
};

export default ClassImage;
