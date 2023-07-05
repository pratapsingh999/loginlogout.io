import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  // const { loginWithRedirect } = useAuth0();
  const {loginWithRedirect, logout ,isAuthenticated,User} = useAuth0();
  return (
    <>
    <div className="App">
   <h1>well come to social media icons</h1>
    </div>
    
   <li>
      {isAuthenticated && <p>{User.name}</p>}
    </li>
    {
      isAuthenticated ? ( <li>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      </li>):(  <li>
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
      </li>)
     } 
   
    



    <ul>
      <li>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      </li>
      <li>
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
      </li>
    </ul>


    {/* <div><button onClick={() => loginWithRedirect()}>Log In</button></div> */}
    {/* <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button> */}
    </>
  );
}

export default App;
