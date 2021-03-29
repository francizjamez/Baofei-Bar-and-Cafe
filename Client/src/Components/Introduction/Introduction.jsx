import "./Style-Introduction.css";
import LogoBaofei from "./Images/Logo-Baofei.png";
import IconTwitter from "./Images/Icon-Twitter.png";
import IconFacebook from "./Images/Icon-Facebook.png";
import IconInstagram from "./Images/Icon-Instagram.png";

function App() {
    return (
        <section id="introduction" class="header">
           <div>
              <img class="img-logo" src={LogoBaofei} alt="Baofei Logo"/>

              <a href="https://Twitter.com" target="_blank" rel="noreferrer">
                  <img class="img-twitter" src={IconTwitter} alt="Icon Twitter"/>
              </a>

              <a href="https://Facebook.com" target="_blank" rel="noreferrer">
                  <img class="img-facebook" src={IconFacebook} alt="Icon Facebook"/>
              </a>

              <a href="https://Instagram.com" target="_blank" rel="noreferrer">
                  <img class="img-instagram" src={IconInstagram} alt="Icon Instagram"/>
              </a>
           </div>
        </section>
    );              
  }
  
export default App;