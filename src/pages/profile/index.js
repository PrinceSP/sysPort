import {Header,WelcomeText,Buttons,Inputs} from '../../components'
import './index.css'

const Profile = () => {
  return (
    <div className='profiles'>
      <Header/>
      <div className='innerContainer'>
        <h2>User Profile</h2>
        <div className='outerPictureCont'>
          <div className="pictureContainer">
            <div className='profilePicture'/>
          </div>
          <Buttons title='change photo' isTrue={true} rad={10} bg='#f4f00' clr='#000' fontF='Cairo'/>
        </div>
        <div>
          <form>
              <Inputs title='First Name' holder='john' fontF='Cairo' clr='000'/>
              <Inputs title='Last Name' holder='doe' fontF='Cairo' clr='000'/>
              <Inputs title='Email' holder='johndoe@gmail.com' fontF='Cairo' clr='000'/>
              <Inputs title='Contact' holder='+51238571' fontF='Cairo' clr='000'/>
              <Inputs title='Address' holder='St.Median' fontF='Cairo' clr='000'/>
              <Inputs title='City' holder='Oregon' fontF='Cairo' clr='000'/>
              <Inputs title='State' holder='California' fontF='Cairo' clr='000'/>
              <Inputs title='Zip Code' holder='12841' fontF='Cairo' clr='000'/>
              <Inputs title='Country' holder='United Staes' fontF='Cairo' clr='000'/>
              <Inputs title='Gender' holder='male or female' fontF='Cairo' clr='000'/>
              <Inputs title='Religion' holder='Christian' fontF='Cairo' clr='000'/>
              <Inputs title='Faculty' holder='+Economic and Bussiness' fontF='Cairo' clr='000'/>
              <Inputs title='Major' holder='accounting' fontF='Cairo' clr='000'/>
              <Inputs title='Password' holder='*******' fontF='Cairo' clr='000'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
