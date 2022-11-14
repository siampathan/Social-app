import "./register-style.css";

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Siam Social</h3>
          <span className="loginDesc">
            Connect with your friend and which are connected with siam social
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="User Name" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
