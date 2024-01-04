export const FindedPokemon = ({ data, onClose }) => {
  const ClassModal = onClose ? 'Container-Modal' : 'Container-Modal-false';

  let longitudId = data.id >= 10 ? `#0${data.id}` : `#00${data.id}`;

  return (
    <div className={ClassModal}>
      <div className="Backdrop"></div>
      <div className="Modal">
          <div className="card rounded-5" style={{ width: '18rem' }}>
            <img
              src={data.sprites.front_default}
              id="imagePokemon"
              className="card-img-top"
              alt="Pokemon"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold" id="Name">
                <span className="opacity-50">{longitudId} </span>
                {data.name.toUpperCase()}
              </h5>
              <p className="card-text">
                {data.height}M {data.weight}KG
              </p>
              <div className="Container-Button-types">
                <button className="Button-type">{data.types[0].type.name}</button>
                <button className="btn btn-outline-success" id="CloseButton" onClick={onClose}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
