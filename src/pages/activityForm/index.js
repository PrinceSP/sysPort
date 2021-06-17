import {AcaWaves,
BubMid,
BubLeft,
BubRight,
Flowers} from '../../assets'
import "./index.css"
import {Header,Inputs,ActivityDetails} from '../../components'

const ActivityForm = () => {
  return (
    <div className='container'>
      <Header/>
      <div className='ImageContainer'>
        <img src={AcaWaves} alt='illustrations'/>
        <img src={BubMid} alt='illustrations'/>
        <img src={BubLeft} alt='illustrations'/>
        <img src={BubRight} alt='illustrations'/>
        <img src={Flowers} alt='illustrations'/>
      </div>
      {/*<div className='academicContainer'>
        <p>Activity Details</p>
        <div className='academicActivityDatas'>
          <Inputs title='ID' clr='#000' bclr='#9B9A9A' rad ='10px'/>
          <Inputs title='Name' bclr='#9B9A9A' rad ='10px'/>
          <Inputs title='Academic' bclr='#9B9A9A' rad ='10px'/>
          <Inputs title='Non-Academic' bclr='#9B9A9A' rad ='10px'/>
          <Inputs title='Activity Levels' width='550px' bclr='#9B9A9A' rad ='10px'/>
        </div>
      </div>*/}
      <ActivityDetails height='360px' width='650px' left='100px' top='182px' title='Activity Details'/>
    </div>
  )
}

export default ActivityForm
