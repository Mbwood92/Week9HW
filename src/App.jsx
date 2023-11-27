import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Week 9 Homework</h1>
    <h3>1. Is an API key required?</h3>
<li> No (Rick&Morty)</li>
<li>Yes(Marvel)</li>
<li>No(Prokerala)</li>

<h3>2.What is the base url?</h3>
 
<li>https://rickandmortyapi.com/</li>

<li>https://developer.marvel.com/</li>

<li>https://api.prokerala.com/</li>

<h3>3.What is one endpoint that you could use in the api?</h3>

<li>(Rick&Morty)character</li>
<li>(Marvel)character</li>
<li>(Prokerala)birth-charts</li>

<h3>4.For the endpoint that you chose, provide an example of the data you get back in the response.</h3>

<li>I will get back all the characters from the 51 episodes.(Rick&Morty)</li>

<li>I will get back all Marvel characters.(Marvel)</li>

<li>I will get back horoscope based off person birthday for that day.(Prokerala)</li>
    </>
  )
}

export default App
