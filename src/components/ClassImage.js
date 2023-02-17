const ClassImage = ({ image, imageAlt, optionalCss }) => {
  return (
    <>
      <div className="h-[150px] w-[150px] rounded-3xl overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className={optionalCss + " origin-top scale-[1.75] "}
        />
      </div>
    </>
  );
};

export default ClassImage;
