import "./Style-Login.css";
import LogoBaofei from "./Images/Logo-Baofei.png";

const style = {
  username: {
    top: "40%",
  },

  password: {
    top: "60%",
  },
};

const Login = () => {
  return (
    <section class="login">
      <img class="img-logo" src={LogoBaofei} alt="Baofei Logo" />
      <div class="container">
        <h1>Login</h1>
        <input type="text" class="txtbox" style={style.username}/>
        <input type="password" class="txtbox" style={style.password}/>
        <button class="btn-login">Login</button>
      </div>
    </section>
  );
};

export default Login;
