import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Bem vindo de volta,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="E-mail" name="email" />
          <input type="password" placeholder="Senha" name="password" />
          <button>Entrar</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <form>
          <h2>Crie uma conta</h2>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="avatar image" />
            Escolha uma imagem
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Nome de usuário" name="username" />
          <input type="text" placeholder="E-mail" name="email" />
          <input type="password" placeholder="Senha" name="password" />
          <button>Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
