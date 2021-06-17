import {useState,useEffect} from 'react'
import {Inputs} from '../../../components'
import './index.css'



const ActivityDetails = ({width,height,top,left,right,title})=>{

  const styles={
    container:{
      width,
      height,
      display: 'flex',
      alignItems: 'center',
      justifyContent:'center',
      flexDirection: 'column',
      border: '1px solid #BAA7A7',
      borderRadius:'10px',
      backgroundColor: '#fff',
      zIndex:1,
      position:'absolute',
      top,left,right,
    }
  }

  const {container} = styles

  return(
    <div style={container} className='academicContainer'>
      <p>{title}</p>
      <div className='academicActivityDatas'>
        <Inputs title='ID' clr='#000' bclr='#9B9A9A' rad ='10px'/>
        <Inputs title='Name' bclr='#9B9A9A' rad ='10px'/>
        <Inputs title='Academic' bclr='#9B9A9A' rad ='10px'/>
        <Inputs title='Non-Academic' bclr='#9B9A9A' rad ='10px'/>
        <Inputs title='Activity Levels' width='550px' bclr='#9B9A9A' rad ='10px'/>
      </div>
    </div>
  )
}

export default ActivityDetails
