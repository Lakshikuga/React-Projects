import { gapi } from 'gapi-script';
import React from 'react';
import { Button } from './Button';

import { useState } from 'react';
/*import { Row, Col, Spin } from 'antd';*/


const CLIENT_ID = process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_DRIVE_API_KEY;   

function Customer(){

    const [isLoadingGoogleDriveApi, setIsLoadingGoogleDriveApi] = useState(false);
    const [signedInUser, setSignedInUser] = useState();
    /**
   *  Sign in the user upon button click.
   */
  const handleAuthClick = (event) => {
    gapi.auth2.getAuthInstance().signIn();
  };

  /**
   *  Called when the signed in status changes, to update the UI
   *  appropriately. After a sign-in, the API is called.
   */
  const updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
      // Set the signed in user
      setSignedInUser(gapi.auth2.getAuthInstance().currentUser.je.Qt);
      setIsLoadingGoogleDriveApi(false);
      // list files if user is authenticated
     // listFiles();
    } else {
      // prompt user to sign in
      handleAuthClick();
    }
  };

  /**
   *  Sign out the user upon button click.
   */
  const handleSignOutClick = (event) => {
    //setListDocumentsVisibility(false);
    gapi.auth2.getAuthInstance().signOut();
  };

  /**
   *  Initializes the API client library and sets up sign-in state
   *  listeners.
   */
  const initClient = () => {
    setIsLoadingGoogleDriveApi(true);
    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
      })
      .then(
        function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        },
        function (error) {}
      );
  };

  const handleClientLoad = () => {
    gapi.load('client:auth2', initClient);
  };
 

    

    return(

    <div className="input-areas">
        <form>
            
            <Button buttonStyle="btn-primary" onClick={ () => handleClientLoad () }>Load Dataset</Button>
        </form>
    </div>
    )
}

export default Customer;

