import Features from "../components/Features";
import BetterWay from "../components/BetterWay";
import Solutions from "../components/Solutions";
import GettingStarted from "../components/GettingStarted";
import Gallery from "../components/Gallery";
import HeroHome from "../components/Hero-Home";

const Home = () => {
    return (
        <>
            <HeroHome heroImg="/hero/home.png" heroTxt="Too Much Admin, Too Many Reports, Too Little Time?"/>
            <Features />
            <BetterWay />
            <Solutions />
            <GettingStarted />
            <Gallery />
        </>
    );
}

export default Home;