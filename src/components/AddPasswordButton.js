


import React from 'react';

class AddPasswordButton extends React.Component{
  constructor(props){
    super(props);
    this.addWBtnClick = this.addWBtnClick.bind(this);
  }

  //change what's shown or not when the user clicks the add Password button.
  addWBtnClick(){
    this.props.previousPages.push("home");
    this.props.changeShownState({
      activePage: "addPassword",
      isPasswordsShown: false,
      isAddPasswordButtonShown: false,
      isAddPasswordPageShown: true,
      //[...this.props.previousPages, "home"] may work.
      previousPages: this.props.previousPages
    });
  }

  render (){
    if(this.props.isShown){
      return (
        <button className="addPasswordBtn" onClick={this.addWBtnClick}>
        +
        </button>
      );
    }else{
      return null;
    }
  }
}

export default AddPasswordButton;
