import "./Cards.css";

const Card = ({ nome, cargo, img, cor }) => {
  return (
    <div className="container__card">
      <div className="container__superior" style={{ background: cor }}>
        <img src={img} atl={nome} />
      </div>
      <div className="container__inferior">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Card;
