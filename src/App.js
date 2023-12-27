import React from 'react';
import './App.css';
import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Finance from './Finance';


const App = () => {

  return (
    <Authenticator>
      {({ signOut, user }) => {
        if (user) {
          return (
            <div>
              <Finance />
              
              <button onClick={signOut}>Sair</button>
            </div>
          );
        }
      }}
    </Authenticator>
  );
};
export default App;