import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <section className="flex flex-col justify-end h-screen bg-[url('./backgrounds/welcome_background.jpg')] bg-cover bg-no-repeat bg-top">
        <div className="mb-10">
          <h1 className="text-white text-veryBig mb-4 ml-10 font-arial">
            Believe Yourself
          </h1>
          <div className="flex">
            <div className="w-11 mr-2 border-[1px] h-0 self-center"></div>
            <p className="text-white text-normal">Train like a pro</p>
          </div>
        </div>
        <div className="grid">
          <div className="flex w-full max-h-[33vh] h-screen bg-[url('./backgrounds/welcome_center.jpg')] bg-cover bg-no-repeat bg-center mb-14 col-start-1 col-end-1 row-start-1 row-end-3"></div>
          <Link
            to="home"
            className="bg-white self-end ml-auto py-4 px-[65px] col-start-1 col-end-1 row-start-1 row-end-4 mb-[15px] text-normal rounded-l-2xl"
          >
            Start Training
          </Link>
        </div>
      </section>
    </>
  );
};

export default Welcome;
