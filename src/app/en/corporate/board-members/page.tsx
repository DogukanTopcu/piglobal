import React from 'react'
import Hero from '../../../common/Hero'
import { BoardMembersHeroData } from '../../data/heroData'
import UnderConstruction from '@/app/common/UnderConstruction';

const BoardMembers = () => {
    const data = BoardMembersHeroData;
  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default BoardMembers