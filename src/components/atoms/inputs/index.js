const Inputs = ({className,title,holder,value,fontF,clr,size,height,width=260}) => {
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
      border: '1.5px solid #CED8F0',
      boxSizing: 'border-box',
      borderRadius: '3px'
    }
  }
  return (
    <div>
      <p>{title}</p>
      <input style={style.input} placeholder={holder} value={value} className={className}/>
    </div>
  )
}

export default Inputs
