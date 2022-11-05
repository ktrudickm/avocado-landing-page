import React from 'react'
import './style.css';
import {MEMBERS} from './members';

const ourTeam = () => {
  return (
    <div id='team' className='teamContainer'>
        <h1 className='titleText'>Our Team</h1>
        <div className='imgContainer'>
        {MEMBERS.map((member) => (
          <div className='member' key={member.name}>
            <img className='memberImg' src={member.imgSrc} alt={member.name}/>
            <div className='textContainer'>
              <div className='memberName'>{member.name}</div>
              <div className='memberTitle'>{member.position}</div>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default ourTeam