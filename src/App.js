//import logo from './logo.svg'; 
import './App.css';
import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Receitas from './Receitas';

const App = () => {

  return (
    <Authenticator>
      {({ signOut, user }) => {
        if (user) {
          return (
            <div>
              <Receitas />
              <button onClick={signOut}>Sair</button>
            </div>
          );
        }
      }}
    </Authenticator>
  );
};

export default App;
