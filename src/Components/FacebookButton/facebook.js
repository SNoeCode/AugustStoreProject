import React, { useState } from "react";
import FacebookLogin from 'react-facebook-login';
export default class facebook extends Component {
state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: ''
}
responseFacebook = response => {
    console.log(response)
}
componentClicked = () => console.log("clicked");



    render() {
let fbContent;

if(this,state.isLoggedIn) {
fbContent = null;
} else {
  fbContent =(
  <FacebookLogin
          appId="501212999187816"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        document.getElementById('demo')
        />
  )
    }

    return 
<div>{fbContent}</div>
    }    
}
    