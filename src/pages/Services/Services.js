import React from 'react'
import {
    homeObjThree} from './Data'

import {InfoSection} from '../../components/'
import Pricing from '../../components/Pricing/Pricing'

const Home = () => {
    return (
        <>
            
            <Pricing />
            <InfoSection {...homeObjThree}/>
        </>
    )
}

export default Home
