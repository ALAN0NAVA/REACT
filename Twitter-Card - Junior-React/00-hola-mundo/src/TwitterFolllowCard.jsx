import { useState } from "react"
        //children es todo lo que envuelva la funcion 
        //se puede establecer un valor por defecto si es que no mandan alguna promp__(userName = 'unknown')

export function TwitterFollowCard ({children, userName = 'unknown', initialIsFollowing, name}){
                                //encapsuado, username por defecto, 
    //tenemos que establecer un valor por defecto
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)  //se declara de una manera mas facil así
        //nos devuelve un array de 2 posiciones 
        //const isFollowing = state[0] //valor del estado
        //const setIsFollowing = state [1] //variable para cambiar el valor

    const text = isFollowing ? 'Siguiendo' : 'Seguir'//ternaria, if corto
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
        //funcion que no recibe nada
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }


    return(
        <article className='tw-followCard'>

        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="El avatar de midudev" />
            <div className='tw-followCard-info'>
            <strong>{children} {name}</strong>
            <span className='tw-followCard-username'>{userName}</span>
            </div>
        </header>

        <aside>
            <button 
                className={buttonClassName}
                onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
            </button>
        </aside>
    </article>
    )   
}