import React, {useRef} from "react";
import Header from "../Components/Header";
import Lander from "../Components/Lander";
import Friends from "../Components/Friends";




const Home = () => {


    return(
        <div className="Home">
        <header>
            <Header />
        </header>


        <main>
            <Lander />
            <Friends />
        </main>


        <footer>

        </footer>
        </div>
    )
}

export default Home;