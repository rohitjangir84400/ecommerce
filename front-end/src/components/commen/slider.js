import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    /* slider settings */
    var settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        arrows: false,
    };
    return (
        /* ui for slider of home screen */
        <div className=" bg-gray-800">
            <Slider {...settings}>
                <div className="bg-[url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-cover bg-center h-[90vh] relative">
                    <div className="text-black text-[50px] font-extrabold px-10 py-10">
                        <div className="py-5">Start Shopping With</div>
                        <div><span className="text-white">F</span>ashion <span className="text-white">H</span>ub</div>
                    </div>
                </div>
                <div className="bg-[url('https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-cover bg-center h-[90vh] relative">
                    <div className="flex justify-end text-black text-[50px] font-extrabold px-10 py-10">
                        <div>
                            <div className="py-5"><span className="text-yellow-500">L</span>atest <span className="text-yellow-500">F</span>ashion</div>
                            <div ><span className="text-yellow-500">P</span>roducts</div>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('https://images.unsplash.com/photo-1445384763658-0400939829cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-cover bg-center h-[90vh] relative">
                    <div className="flex justify-end text-white text-[50px] font-extrabold px-10 py-10">
                        <div>
                            <div className="py-5"><span className="text-yellow-500">L</span>atest <span className="text-yellow-500">G</span>ym</div>
                            <div ><span className="text-yellow-500">E</span>quipments</div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}


