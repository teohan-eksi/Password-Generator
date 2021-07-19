


import React, { useState, useRef } from 'react';
import Header from './components/Header.js';
import Body from './components/Body.js';

import './App.css';

function App() {
  //set the initial state for the header title.
  //when the page context changes in the body component,
  //the active page will call setHeaderTitle function to change
  //the header title from its own scope.
  //Header compenent will change the title after the variable changes.
  const [headerTitle, setHeaderTitle] = useState("Password Manager");

  //set the initial state for the back arrow visibility.
  //it's not shown in the home screen at the app start.
  const [isBackArrowShown, setBackArrowShown] = useState(false);

  //when back arrow is clicked on a page,
  //1) hide back arrow if previous page is home page.
  //2) change header title to the previous page
  //3) bring back previous page content.
  //to do that, you need to know where you are, what's the previous page
  //and what are its contents.
  const childBodyRef = useRef();
  function backArrowClicked(){
    // array.pop() removes the last item from the array and returns it.
    const previousPage = childBodyRef.current.state.previousPages.pop();
    if(previousPage === "home"){
      setBackArrowShown(false);
      setHeaderTitle("Password Manager");
      //bring back home page states and let the React do the rest.
      childBodyRef.current.changeShownState({
        activePage: "home",
        isPasswordsShown: true,
        isAddPasswordButtonShown: true,
        isAddPasswordPageShown: false
      });
    }
    //right now there is only one page. As pages are added, update the back logic.
  }

  return (
    <div className="App">
      <Header
        //show the back arrow according to the control parameter.
        isBackArrowShown = {isBackArrowShown}
        //call backArrowClicked function when it's clicked.
        backArrowClicked = {backArrowClicked}
        //show header title
        headerTitle={headerTitle}
        />
      <Body
        ref={childBodyRef}
        //control whether the back arrow shown or not according to
        //the body context.
        setBackArrowShown = {setBackArrowShown}
        //change header title according to the body context,
        //if a page transition occurs.
        changeHeaderTitle={setHeaderTitle}
      />
    </div>
  );
}

export default App;
