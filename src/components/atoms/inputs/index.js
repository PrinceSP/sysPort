const Inputs = ({title,holder,value,fontF,clr,size}) => {
  const style ={
    p:{
      fontFamily:fontF,
      fontSize:size,
      color:clr
    },
    input:{
      height:43,
      width:260,
      padding:'0 10px'
    }
  }
  return (
    <div>
      <p>{title}</p>
      <input style={style.input} placeholder={holder} value={value}/>
    </div>
  )
}

export default Inputs
