import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TwitterFollowCard } from './TwitterFolllowCard'

function App() {
  //FUNCION que se mandará a atravez del componente __formatUserName={formatUserName} __
  const formatUserName = (userName) => `@${userName}`

  //pasar los param de un OBJETO __{...midudev}__  ## no es muy buena practica
  const midudev ={ isFollowing: true, userName: 'midudev'}

  //al pasar solo "isFollowing" ees como si se pasara un true, si no pones nada lo otma como false
  return (
    // el elemento que envuelve es el children se puede usar de ambas formas
    <section className='App'>
      <TwitterFollowCard formatUserName={formatUserName} 
        {...midudev}
        initialIsFollowing={true}>
        Migue Angle Duran  
      </TwitterFollowCard>

      <TwitterFollowCard formatUserName={formatUserName} 
        userName="pheralb" name="pheralb"
        initialIsFollowing={false}>
        <strong> perxita</strong>
      </TwitterFollowCard>

      <TwitterFollowCard formatUserName={formatUserName} 
        name="pheralb"
        initialIsFollowing={false}>
        <strong> perxita</strong>
      </TwitterFollowCard>
    </section>
  )
}

export default App
