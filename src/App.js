import './App.css';
import {Footer, Heading} from "./components";
import {
  AmazonLoginButton, BufferLoginButton,
  FacebookLoginButton,
  GithubLoginButton,
  GoogleLoginButton, InstagramLoginButton, LinkedInLoginButton, MicrosoftLoginButton,
  TwitterLoginButton
} from "react-social-login-buttons";

function App() {
  function handleClick() {
    alert("Hello!");
  }
  return (
    <div className="App">
      <Heading />
      <div>
        <FacebookLoginButton onClick={handleClick} />
        <GoogleLoginButton onClick={handleClick} />
        <GithubLoginButton onClick={handleClick} />
        <TwitterLoginButton onClick={handleClick} />
        <AmazonLoginButton onClick={handleClick} />
        <InstagramLoginButton onClick={handleClick} />
        <LinkedInLoginButton onClick={handleClick} />
        <MicrosoftLoginButton onClick={handleClick} />
        <BufferLoginButton onClick={handleClick} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
