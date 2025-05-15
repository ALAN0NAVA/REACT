import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFolllowCard'

const users = [ 
  {
    name: 'cheto',
    isFollowing: true, 
    userName: 'chetoman'
  },
  {
    name: 'loki',
    isFollowing: false, 
    userName: 'loki'
  },
  {
    name: 'Pedro',
    isFollowing: false, 
    userName: 'pedrop'
  }

]

function App() {
  //FUNCION que se mandará a atravez del componente __formatUserName={formatUserName} __
  const formatUserName = (userName) => `@${userName}`

  //pasar los param de un OBJETO __{...midudev}__  ## no es muy buena practica
  const midudev ={ isFollowing: true, userName: 'midudev'}
  

  //al pasar solo "isFollowing" ees como si se pasara un true, si no pones nada lo otma como false
  return (
    // el elemento que envuelve es el children
    <section className='App'>

      /*pasar por objeto*/
      <TwitterFollowCard formatUserName={formatUserName} 
        {...midudev}
        initialIsFollowing={true}>
        Migue Angle Duran  
      </TwitterFollowCard>

      /*Pasar por lista*/
      {
        users.map(({userName, name, isFollowing}) => (
            <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
            name = {name}>
            </TwitterFollowCard>
        )
        )
      }
    </section>
  )
}

export default App
