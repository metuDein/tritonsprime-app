import React from 'react'
import CheckApi from './CheckApi'
import OpeningSection from './OpeningSection'
import HelpTab from './HelpTab'
import QuickTut from './QuickTut'
import Trending from './Trending'

const HomePage = ({bannerData}) => {
  return (
    <>
    <OpeningSection bannerData={bannerData}/>
    <h2 className='title'> Trending</h2>
    <Trending />
    <h2 className='title'>Collections</h2>
    <CheckApi bannerData={bannerData}/>
    <h2 className='title'> Features </h2>
    <HelpTab />
    <h2 className='title'> Quick Intro</h2>
    <QuickTut />
    </>
  )
}

export default HomePage