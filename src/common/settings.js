const settings = {
  dots: false,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 1,
  autoplay: true,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default settings;
