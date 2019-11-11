import React, { Fragment } from 'react'

const Membre = ({name, age, children, hideName, handleChange}) => {
  return(
    <Fragment>
      <p style={{ backgroundColor: age < 10 ? 'blue' : 'lightblue', color: age < 10 ? 'white' : 'blue' }}>
        { name.toUpperCase() } : {age}
      </p>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={hideName}>X</button>
      {children ? <p>{children}</p> : <p>Il n y a pas de props children</p>}
    </Fragment>
  )
}

export default Membre
