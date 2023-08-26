import React, {useRef} from "react";
import Header from "../Components/Header";
import Lander from "../Components/Lander";
import Friends from "../Components/Friends";
import Etc from "../Components/Etc";




const Home = () => {


    return(
        <div className="Home">
        <header>
            <Header />
        </header>


        <main>
            <Lander />
            <Friends />
            <Etc />
        </main>


        <footer>

        </footer>
        </div>
    )
}

export default Home;