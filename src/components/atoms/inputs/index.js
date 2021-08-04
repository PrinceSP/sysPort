const Inputs = ({disabled=true,marginRight,levels,className,name,fontSize='1.25rem',title,holder,value,fontF,clr,clr2,size,height,width=260,type,bclr='#CED8F0',rad='3px',background='#F7FDFF'}) => {
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
      background: background,
      border: `1.5px solid ${bclr}`,
      boxSizing: 'border-box',
      borderRadius: rad,
      fontSize,
      fontFamily:fontF,
      color:clr2
    },
    container:{
      height:'70px',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between'
    },
    inputsContainer:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      marginRight
    },
    levels:{
      marginLeft:'10px'
    }
  }
  return (
    <div style={style.container}>
      <p>{title}</p>
      <div style={style.inputsContainer}>
        <input style={style.input} placeholder={holder} value={value} className={className} type={type} name={name} disabled={disabled}/>
        <p style={style.levels}>{levels}</p>
      </div>
    </div>
  )
}

export default Inputs
