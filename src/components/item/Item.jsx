

export const Item = ({element}) => {
  return (
    <div>
        <h2>{element.title}</h2>
        <img src={element.thumbnail} alt="imagen juego" />
        <h3>Plataforma: {element.platform}</h3>
        <h4>{element.short_description}</h4>
        <p>desarrollado por: {element.developer}</p>

        
    </div> 
  );
};