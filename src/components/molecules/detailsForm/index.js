import React from 'react'
import {Inputs,Buttons,Gaps} from '../../atoms'
import './index.css'

const DetailsForm = () => {
  return (
    <div id='detailsform-container'>
      <div>
        <h3>Activity Details</h3>
        <Gaps verticalGap={20}/>
        <Inputs title='Academic' holder='Math Competition' background='#fff' width={360}/>
        <Gaps verticalGap={15}/>
        <Inputs title='Non-Academic' holder='workshop robotic, etc...' background='#fff' width={360}/>
        <Gaps verticalGap={15}/>
      </div>
      <div className='levels'>
        <Inputs title='Levels' type='radio' width={25}/>
        <Inputs type='radio' width={25}/>
        <Inputs type='radio' width={25}/>
        <Inputs type='radio' width={25}/>
      </div>
      <Gaps verticalGap={50}/>
      <div>
        <h3>Achievement Details</h3>
        <Gaps verticalGap={20}/>
        <Inputs title="Student's extracurricular achievements" holder='backetball championship winner, etc...' background='#fff' width={360}/>
        <Gaps verticalGap={15}/>
        <Inputs title="Student's professional achievements" holder='sandbox hackaton winner, etc...' background='#fff' width={360}/>
        <Gaps verticalGap={15}/>
        <Inputs title='Other achievements' holder='eating contest, etc....' background='#fff' width={360}/>
      </div>
      <Gaps verticalGap={28}/>
      <div className='select-file'>
        <h5>attach your resume</h5>
        <Gaps verticalGap={10}/>
        <input type='file' name='file'/>
      </div>
      <Gaps verticalGap={50}/>
      <div className='levels'>
        <Buttons rad={22} title='Submit' width={128}/>
      </div>
    </div>
  )
}

export default DetailsForm
