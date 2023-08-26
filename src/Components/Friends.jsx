import React, {useContext} from 'react'
import screen1 from "../assets/Screenshot 2023-08-26 024646.png";
import screen2 from "../assets/Screenshot 2023-08-26 025013.png";
import screen3 from "../assets/Screenshot 2023-08-26 025103.png";
import screen4 from "../assets/Screenshot 2023-08-26 030901.png"
import screen5 from '../assets/Screenshot 2023-08-26 030941.png'
import { ButtonScroll } from '../context/ButtonScroll';





const Friends = () => {

    const {targetRef} = useContext(ButtonScroll)

  return (
    <div className='friends'>
        <img ref={targetRef} src={screen1} alt="" />
        <img src={screen2} alt="" />
        <img src={screen3} alt="" />
        <img src={screen4} alt="" />
        <img id='sunset' src={screen5} alt="" />
    </div>
  )
}

export default Friends