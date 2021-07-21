


import React from 'react';
import Passwords from './Passwords.js';
import AddPasswordButton from './AddPasswordButton.js';
import AddPasswordPage from './AddPasswordPage.js';



class Body extends React.Component{
  constructor(props){
    super(props);
    //set the state to manage what's shown in the body.
    this.state =  {
      //at the start of the app:
      activePage: "home",
      isPasswordsShown: true,
      isAddPasswordButtonShown: true,
      isAddPasswordPageShown: false,
      previousPages: [""],
      passwordTitle: "",
      psw: ""
    };

    this.changeShownState = this.changeShownState.bind(this);
  }

  //changes what to show according to how it's called.
  changeShownState(shownStateObj){
    //giving {this.setState} as a prop causes errors.
    //if this was a function component, using setState in a useEffect hook
    //would have solved the problem.
    //so call setState from here with the given object.
    this.setState(shownStateObj);
  }

  render () {
    return (
      <div className="body">
        <Passwords
          //control the render of the content inside Passwords component
          isShown = {this.state.isPasswordsShown}

          passwordTitle = {this.state.passwordTitle}
          psw = {this.state.psw}
        />
        <AddPasswordButton
          isShown = {this.state.isAddPasswordButtonShown}

          //if this button is clicked, some components shouldn't be shown.
          //So, change the state of what's shown and not,
          //then, React will take care of the render part.
          changeShownState = {this.changeShownState}
          previousPages = {this.state.previousPages}
        />
        <AddPasswordPage
          isShown = {this.state.isAddPasswordPageShown}

          //change header title to "Add Password"
          changeHeaderTitle = {this.props.changeHeaderTitle}

          //show back arrow on the required page
          setBackArrowShown = {this.props.setBackArrowShown}

          changeShownState = {this.changeShownState}
        />
      </div>
    );
  }
}

export default Body;

