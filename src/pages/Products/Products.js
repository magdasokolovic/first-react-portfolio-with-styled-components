import React from 'react'
import { 
    homeObjTwo,
    homeObjThree} from './Data'

import {InfoSection} from '../../components/'
import Pricing from '../../components/Pricing/Pricing'

const Home = () => {
    return (
        <>
            
            <InfoSection {...homeObjTwo}/>
            <Pricing />
            <InfoSection {...homeObjThree}/>
        </>
    )
}

export default Home
