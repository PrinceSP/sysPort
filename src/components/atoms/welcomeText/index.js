import './index.css'

const WelcomeText = ({title,descOne,descTwo,color,font,weight,size,sizeTwo,weightTwo,align,height,justify}) => {
  const style={
    welcomeText:{
      display:'flex',
      alignItems: align,
      justifyContent: justify,
      flexDirection: 'column',
      height:height,
      marginBottom:'50px',
      marginLeft:72
    },
    title:{
      color:color,
      fontSize: '62px',
      fontWeight: 600,
      fontFamily: 'Poppins'
    },
    descOne:{
      fontFamily: font,
      fontStyle: 'normal',
      fontWeight: weight,
      fontSize: size,
      letterSpacing: '0.06em'
    },
    descTwo:{
      fontSize:sizeTwo,
      fontWeight:weightTwo,
      fontFamily:'Poppins',
      textAlign:'left',
      width:374,
      color:'#636262'
    }
  }
  return (
    <div style={style.welcomeText}>
      <h1 style={style.title}>{title}</h1>
      <p style={style.descOne}>{descOne}</p>
      <p style={style.descTwo}>{descTwo}</p>
    </div>
  )
}

export default WelcomeText
