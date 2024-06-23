import React from 'react'
import Hero from '../../../common/Hero'
import { BoardMembersHeroData } from '../../data/heroData'

const BoardMembers = () => {
    const data = BoardMembersHeroData;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default BoardMembers