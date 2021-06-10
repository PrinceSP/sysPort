const Inputs = ({title,holder,value,fontF,clr,size}) => {
  const style ={
    p:{
      fontFamily:fontF,
      fontSize:size,
      color:clr
    }
  }
  return (
    <div>
      <p>{title}</p>
      <input placeholder={holder} value={value}/>
    </div>
  )
}

export default Inputs
