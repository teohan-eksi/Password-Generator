


import React from "react";

class BackArrow extends React.Component{
  render(){
    if(this.props.isShown){
      return (
        <button
          className="backArrow"
          onClick={this.props.backArrowClicked}>
          {"<-"}
        </button>
      );
    }else{
      return null;
    }
  }
}

class HeaderTitle extends React.Component{
  render(){
    return(
      <div className="headerTitle">
        {this.props.headerTitle}
      </div>
    );
  }
}

class OptionsButton extends React.Component{
  render(){
    return (
      <button className="optionsButton">
        o
      </button>
    );
  }
}

class Header extends React.Component {
  render(){
    return (
      <div className="headerBar">
        <BackArrow
          isShown = {this.props.isBackArrowShown}
          backArrowClicked = {this.props.backArrowClicked}
        />
        <HeaderTitle
          headerTitle = {this.props.headerTitle}
        />
        <OptionsButton/>
      </div>
    );
  };
}

export default Header;
