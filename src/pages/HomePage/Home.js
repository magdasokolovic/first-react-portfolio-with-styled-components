import React from 'react'
import {homeObjOne, 
    homeObjTwo,
    homeObjThree} from './Data'

import {InfoSection} from '../../components/'
import Pricing from '../../components/Pricing/Pricing'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Pricing />
            <InfoSection {...homeObjThree}/>
        </>
    )
}

export default Home
