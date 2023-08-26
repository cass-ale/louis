import React, {useContext} from 'react';
import { Button } from '@chakra-ui/react'
import { ButtonScroll } from '../context/ButtonScroll';


const Lander = () => {
 const {handleClick} = useContext(ButtonScroll);


  return (
    <div className='lander'>
        <h1>Hey, Pal.</h1>

        <p>
            This website is many things. A proposal on one hand, a plea on the other, an opportunity on the third, unattached hand, and,
            one could say, a bordering-upon-desparate attempt to move out of NYC and into a Real Home on the fourth, last hand.
            <br /><br/> Before we get into it, won't you stroll down memory lane with me?
        </p>

        <Button onClick={handleClick}>REMINISCE</Button>
    </div>
  )
}

export default Lander