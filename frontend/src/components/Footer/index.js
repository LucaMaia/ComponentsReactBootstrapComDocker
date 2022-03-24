import React from 'react'
import { FooterStyle } from './style'


function Footer (props) {    
    let negative = props.negative || false;
  
    return(
      <FooterStyle>
        <FooterContent negative={negative} />
      </FooterStyle>
    );
  }
   
  function FooterContent(props) {

    let img = 'negative.png'

    if(props.negative){
        img = 'positive.png';
    }

    return(
        <footer className={`br-footer  ${props.negative ? "inverted" : "" }`} >

            <div class="container-lg">
                    <div class="logo text-sm-center" inverted="inverted" >
                       
                    </div>
                <div class="br-list horizontal" data-toggle="data-toggle" data-unique="data-unique">
            </div>
        </div>
        <div class="container-lg">
            <div class="info" style={{  margin: "20px"}}>
            <div class="text-down-01 text-medium pb-3">Texto destinado a exibição de informações relacionadas à&nbsp;<strong>licença de uso.</strong></div>
            </div>
        </div>
        </footer>
    );
 }
   

export default Footer;