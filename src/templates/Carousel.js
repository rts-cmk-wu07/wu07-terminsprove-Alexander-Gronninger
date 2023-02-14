// Taken from iplaymusic project

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = ({ children, setPlaylistIndex }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    centerMode: false,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
  };
  /* function swipeHandler(i) {
    setPlaylistIndex(i);
  } */
  return (
    <div className="max-w-[375px]">
      <Slider {...settings} /*  afterChange={swipeHandler} */>
        {children}
      </Slider>
    </div>
  );
};

export default Carousel;
