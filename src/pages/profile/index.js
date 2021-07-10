import {Header,Buttons,Inputs} from '../../components'
import {ProfileIllustration} from '../../assets'
import './index.css'

const Profile = () => {
  return (
    <div className='profiles'>
      <Header/>
      <div className='innerContainer'>
        <div>
          <h2>User Profile</h2>
          <div className='outerPictureCont'>
            <div className="pictureContainer">
              <div className='profilePicture'/>
            </div>
            <Buttons title='change photo' isTrue={true} rad={10} bg='#f4f00' clr='#000' fontF='Cairo'/>
          </div>
        </div>
        <div>
          <form>
            <div className="item-1" ><Inputs title='First Name' holder='john' fontF='Cairo' clr='#000'/></div>
            <div className="item-2" ><Inputs title='Last Name' holder='doe' fontF='Cairo' clr='#000'/></div>
            <div className="item-3" ><Inputs width="95%" title='Email' holder='johndoe@gmail.com' fontF='Cairo' clr='#000'/></div>
            <div className="item-4" ><Inputs width="95%" title='Contact' holder='+51238571' fontF='Cairo' clr='#000'/></div>
            <div className="item-5" ><Inputs width="95%" title='Address' holder='St.Median' fontF='Cairo' clr='#000'/></div>
            <div className="item-6" ><Inputs title='City' holder='Oregon' fontF='Cairo' clr='#000'/></div>
            <div className="item-7" ><Inputs title='State' holder='California' fontF='Cairo' clr='#000'/></div>
            <div className="item-8" ><Inputs title='Zip Code' holder='12841' fontF='Cairo' clr='#000'/></div>
            <div className="item-9" ><Inputs title='Country' holder='United Staes' fontF='Cairo' clr='#000'/></div>
            <div className="item-10"><Inputs title='Gender' holder='male or female' fontF='Cairo' clr='#000'/></div>
            <div className="item-11"><Inputs title='Religion' holder='Christian' fontF='Cairo' clr='#000'/></div>
            <div className="item-12"><Inputs title='Faculty' holder='Economic and Bussiness' fontF='Cairo' clr='#000'/></div>
            <div className="item-13"><Inputs title='Major' holder='accounting' fontF='Cairo' clr='#000'/></div>
            <div className="item-14"><Inputs width="95%" title='Password' holder='*******' fontF='Cairo' clr='#000' type='password'/></div>
            <Buttons title='Save' width="190%" rad={4} bg='#80C54B' clr='#fff' fontF='Cairo'/>
          </form>
        </div>
        <img src={ProfileIllustration} alt='profile page illustration'/>
      </div>
    </div>
  )
}

export default Profile
