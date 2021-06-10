import {Header,WelcomeText,Buttons} from '../../components'
import './index.css'

const Profile = () => {
  return (
    <div className='profiles'>
      <Header/>
      <div className='innerContainer'>
        <h1>User Profile</h1>
        <div className='outerPictureCont'>
          <div className="pictureContainer">
            <div className='profilePicture'/>
          </div>
          <Buttons title='change photo' isTrue={true} rad={10} bg='#f4f00' clr='#000' fontF='Cairo'/>
        </div>
        <div>
          <form>
            <div>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
