import Slider from 'react-slick';
import SliderItem from "./sliderItem"


function SliderComponent() {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplaySpeed: 4000,
        arrows: false,
        appendDots: dots => (
            <ul style={{ position: 'absolute', bottom: '16px', display: "flex", justifyContent: "center" }}> {dots} </ul>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: "whitesmoke",
                    margin: "0 5px",
                    display: "inline-block",
                }}
            ></div>
        ),
    };
    return (
        <Slider {...settings}>
            <SliderItem image="/images/Untitled-1.png" text="تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية " />
            <SliderItem image="/images/Untitled-1.png" text="تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية " />
            <SliderItem image="/images/Untitled-1.png" text="تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية " />
        </Slider>
    )
}

export default SliderComponent