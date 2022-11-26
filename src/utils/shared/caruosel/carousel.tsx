import { Button, Carousel } from "antd";
import { useRef } from "react";
import classes from "index.module.css";


const Slider = () => {
  const contentStyle: any = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const nextBtn = useRef<HTMLHeadingElement>(null);
  const prevBtn = useRef<HTMLHeadingElement>(null);
  const ref = useRef();

  const SlickButtonFix = ({
    currentSlide,
    slideCount,
    children,
    ...props
  }: any) => <span {...props}>{children}</span>;

 
  return (
    <>
      <Carousel
        draggable={true}
        arrows={true}
        autoplay={true}
        ref={ref as any}
        dots={false}
        infinite={true}
        autoplaySpeed={0}
        speed={1000}
        slidesToShow={5}
        slidesToScroll={1}
        initialSlide={0}
        pauseOnHover={false}
        swipeToSlide={true}
        nextArrow={
          <SlickButtonFix style={{ zIndex: 999 }}>
            <Button ref={nextBtn} className={classes.prevNextBtn}>
              <i className="fa fa-chevron-right"></i>
            </Button>
          </SlickButtonFix>
        }
        prevArrow={
          <SlickButtonFix>
            <Button ref={prevBtn} className={classes.prevNextBtn}>
              <i className="fa fa-chevron-left"></i>
            </Button>
          </SlickButtonFix>
        }
        responsive={[
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1064,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 770,

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
        ]}
      ></Carousel>
    </>
  );
};
export default Slider;
