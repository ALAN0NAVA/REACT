export const Square = ({children, isSelected, updateBoard, index}) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`//le agrega (square + is-selected) si es true, o solo deja (square) si es false
    const handleClick = () => {updateBoard(index)} //aqui si se manda a ejecutar la funcion al hacer click
  
    //////////////render///////////////////vvv  
    return(
      <div onClick={handleClick} className={className}> 
        {children} 
      </div>
    )//////////////render///////////////////  
  }/////Componente///////////funcion de un cuadrado