import React, { Fragment } from 'react'

const Membre = ({name, age, children}) => {
  return(
    <Fragment>
      <p>{ name.toUpperCase() } : {age}</p>
      {children ? <p>{children}</p> : <p>Il n y a pas de props children</p>}
    </Fragment>
  )
}

export default Membre
