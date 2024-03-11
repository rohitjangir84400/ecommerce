import Features from "../components/commen/features";
import ShopByCatogery from "../components/commen/shopbycatogery";
import SimpleSlider from "../components/commen/slider";

function HomeScreen() {
    /* home screen ui  */
    return (
        <>
            <SimpleSlider />
            <ShopByCatogery />
            <Features />
        </>
    );
}

export default HomeScreen;