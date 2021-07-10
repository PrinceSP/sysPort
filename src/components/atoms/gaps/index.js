import React from 'react'

const Gaps = ({verticalGap}) => {
  const styles = {
    gaps:{
      height:verticalGap,
      width:'100%'
    }
  }
  console.log(styles);
  return (
    <div style={styles.gaps}/>
  )
}

export default Gaps
