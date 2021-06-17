import {useState,useEffect} from 'react'
import {Inputs} from '../../../components'
import './index.css'



const ActivityDetails = ({width,display,height,col,row,top,left,right,title,isActivity=false})=>{

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
    },
    one:{
      gridArea:'ext'
    },
    two:{
      gridArea:'prof'
    },
    three:{
      gridArea:'other'
    },
    achievementDetails:{
      width:'85%',
      height:'60%',
      display,
      flexDirection:'column',
      gridTemplateColumns:`repeat(${col},290px)`,
      gridTemplateRows:`repeat(${row},50px)`,
      gridRowGap:'35px',
      marginBottom:'30px'
    }

  }

  const {container,one,two,three,achievementDetails} = styles

  return(
    <div style={container} className='academicContainer'>
      <p>{title}</p>
        {
          isActivity &&
          <div style={achievementDetails}>
            <Inputs title='ID' clr='#000' bclr='#9B9A9A' rad ='10px'/>
            <Inputs title='Name' bclr='#9B9A9A' rad ='10px'/>
            <Inputs title='Academic' bclr='#9B9A9A' rad ='10px'/>
            <Inputs title='Non-Academic' bclr='#9B9A9A' rad ='10px'/>
            <Inputs title='Activity Levels' width='550px' bclr='#9B9A9A' rad ='10px'/>
          </div>
        }
        {
          !isActivity &&
          <div style={achievementDetails}>
            <Inputs style={one} width='380px' title='Extracurricular Achievement' clr='#000' bclr='#9B9A9A' rad ='10px'/>
            <Inputs style={two} width='380px' title='Professional Achievement' bclr='#9B9A9A' rad ='10px'/>
            <Inputs style={three} width='380px' title='Other Achievement' bclr='#9B9A9A' rad ='10px'/>
          </div>
        }
    </div>
  )
}

export default ActivityDetails
