import './App.css'
import DynamicMoviesList from './DynamicMovies'

import { drinks, basicMovies as movies } from './../fakeApi'

function App() {

  return (

    <main>

      <DynamicMoviesList />

      <section>
        <h2>Listado de películas estáticas</h2>
        <ul>
          {movies.map((elm, idx) => <li key={idx}>{elm.title} (Dirigida por {elm.director})</li>)}
        </ul>
        <hr />
      </section>

      <section>
        <h2>Listado de bebidas estáticas</h2>
        <ul>
          {drinks.map((elm, idx) => <li key={idx}>{elm}</li>)}
        </ul>
        <hr />
      </section>

    </main>
  )
}

export default App;
