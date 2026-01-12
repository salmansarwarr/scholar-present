import Features from "../components/Features";
import BetterWay from "../components/BetterWay";
import Solutions from "../components/Solutions";
import GettingStarted from "../components/GettingStarted";
import Gallery from "../components/Gallery";
import HeroHome from "../components/Hero-Home";
import heroDesktop from "../assets/hero/home.png";
import heroAbout from "../assets/hero/about.png";
import heroJoin from "../assets/hero/join.png";

const slides = [
    {
        img: heroDesktop,
        text: "Too Much Admin, Too Many Reports, Too Little Time?",
    },
    {
        img: heroAbout,
        text: "Too Many Classes, Too Much Paperwork, Too Little Focus?",
    },
    {
        img: heroJoin,
        text: "Too Many Tasks, Too Many Systems, Too Little Clarity?",
    }
]


const Home = () => {
    return (
        <>
            <HeroHome slides={slides} />
            <Features />
            <BetterWay />
            <Solutions />
            <GettingStarted />
            <Gallery />
        </>
    );
}

export default Home;