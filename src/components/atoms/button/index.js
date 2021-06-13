import './index.css'

const Buttons = ({title,bg='#4870FF',font,fontF,rad=15,left,isTrue,clr='#fff',width='205px'}) => {
  let hasShadow;
  if (isTrue){
    hasShadow='0px 6px 20px rgba(0, 0, 0, 0.3)'
  }

  const style={
    button:{
      width,
      height:'42px',
      backgroundColor: bg,
      color:clr,
      border:'none',
      borderRadius:rad,
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.562rem',
      fontWeight:550,
      cursor: 'pointer',
      marginLeft:left,
      boxShadow:hasShadow,
      fontFamily:fontF
    }
  }
  return (
    <button style={style.button}>{title}</button>
  )
}

export default Buttons
