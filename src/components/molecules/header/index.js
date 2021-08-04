import {useState} from 'react'
import {BurgerBtn} from '../../../components'
import {Bell,Mail} from '../../../assets'
import {Link} from 'react-router-dom'
import "./index.css"

export const Menu = ()=>{

  const style = {
    container:{
      height:222,
      width:230,
      position: 'absolute',
      left: 1178,
      top: 70,
      zIndex:11,
      boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.25)'
    },
    first:{
      width: '100%',
      height: '80%',
      filter: 'drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.25))',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-around',
      flexDirection:'column',
      borderRadius: '3px 0',
      backgroundColor:'#fff',
      marginBottom:4
    },
    ul:{
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      flexDirection:'column',
      height:'60%'
    },
    lists:{
      listStyle:'none',
    },
    links:{
      textDecoration:'none',
      color:'#000',
    }
  }

  const {container,first,ul,lists,p,links} = style;
  return(
    <div style={container} className='cont'>
      <div style={first}>
        <ul style={ul}>
          <li style={lists}><Link style={links} to='/studentPageHome'>Home</Link></li>
          <li style={lists}><Link style={links} to='/achievementForm'>Achievement Form</Link></li>
          <li style={lists}><Link style={links} to='/activityForm'>Activity Record</Link></li>
          <li style={lists}><Link style={links} to='/Profile'>Profile</Link></li>
        </ul>
      </div>
      <Link className="link" to='/'>
        <p>Logout</p>
      </Link>
    </div>
  )
}

const Header = ({position}) => {
  const [show,setShow] = useState(false)
  const style ={
    container:{
      height:70,
      width:'100%',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      padding:'0 30px',
      position,
      top:0,
      zIndex:2
    },
    h1:{
      fontFamily: 'Poppins',
      fontSize: '1.75rem',
      fontWeight: 600,
      color:'#1933BC',
      letterSpacing:'0.02em'
    },
    profpic:{
      height:47,
      width:47,
      borderRadius:"50%",
      backgroundColor:'#ddd'
    },
    line:{
      height:4,
      width:45,
      backgroundColor:'#6f6f6f',
      transform:'rotate(90deg)'
    },
    items:{
      display:'flex',
      height:'100%',
      minWidth:307,
      alignItems:'center',
      justifyContent:'space-between',
    }

  }
  return (
    <div style={style.container}>
      <h1 style={style.h1}>Student Portfolio System</h1>
      <div style={style.items}>
        <img src={Bell} alt='Bell icon'/>
        <img src={Mail} alt='Mail icon'/>
        <div style={style.line}/>
        <div style={style.profpic}/>
        <BurgerBtn onClick={()=>{setShow(!show)}}/>
        {
          show && <Menu/>
        }
      </div>
    </div>
  )
}

export default Header
