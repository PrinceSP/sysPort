const Inputs = ({className,title,holder,value,fontF,clr,size,height,width=260,type,bclr='#CED8F0',rad='3px'}) => {
  const style ={
    p:{
      fontFamily:fontF,
      fontSize:size,
      color:clr
    },
    input:{
      height:43,
      width,
      padding:'0 8px',
      background: '#F7FDFF',
      border: `1.5px solid ${bclr}`,
      boxSizing: 'border-box',
      borderRadius: rad,
      fontSize:'1.25rem'
    },
    container:{
      height:'70px',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between'
    }
  }
  return (
    <div style={style.container}>
      <p>{title}</p>
      <input style={style.input} placeholder={holder} value={value} className={className} type={type}/>
    </div>
  )
}

export default Inputs
