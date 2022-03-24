import React from 'react'
import { HeaderStyle } from '../Header/Style'


function Header (props) {    
    let type = props.type || "";
    let sistema = props.sistema ;

    return(
      <HeaderStyle>
        <HeaderPadrao type={type} sistema={sistema}/>
      </HeaderStyle>
    );
  }

  function HeaderPadrao(props) {

    return(
      <header className={`br-header ${props.type}` }>
      
      </header>
    )
}

export default Header;