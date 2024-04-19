import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Configurações do Chat</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacidade</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Fotos Compartilhadas</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetails">
                <img
                  src="https://images.unsplash.com/photo-1665241277288-cc866bea837c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icons" />
            </div>
            <div className="photoItem">
              <div className="photoDetails">
                <img
                  src="https://images.unsplash.com/photo-1665241277288-cc866bea837c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icons" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Arquivos Compartilhados</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Bloquear Usuário</button>
        <button className="logout">Sair</button>
      </div>
    </div>
  );
};

export default Detail;
