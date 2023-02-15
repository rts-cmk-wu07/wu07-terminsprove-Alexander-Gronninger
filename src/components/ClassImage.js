const ClassImage = ({ image, imageAlt, optionalCss }) => {
  return (
    <>
      <div className="h-[150px] w-[150px] rounded-3xl overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className={"origin-top scale-150 " + optionalCss}
        />
      </div>
    </>
  );
};

export default ClassImage;
