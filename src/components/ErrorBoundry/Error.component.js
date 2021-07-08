import React from 'react'
import style from  './Error.module.scss'
import logo from '../../asset/logo/persia-icon.png'


function Error(props) {

  return (
    <div className={style.container} >
    <div className={style.box} >
      <img src={logo}  className={style.logo} />
      <h1 className={style.text } >
      {props.children}
      </h1>
    </div>
    </div>
  )
}

export  {Error}
