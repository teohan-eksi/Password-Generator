


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
      previousPages: [""]
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
          //send the controller variable to show the content
          isShown = {this.state.isPasswordsShown}
          //pass the setHeaderTitle function down the hierarchy
          //if a password key is chosen, its title will be the header title.
          changeHeaderTitle={this.props.changeHeaderTitle}
        />
        <AddPasswordButton
          //send the controller variable to show, or not, the content
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
        />
      </div>
    );
  }
}

export default Body;
