import './App.css'
import { ErrorBoundary } from './components/ErrorBoundary'
import Title from './components/Title'
import AnimalList from './pages/AnimalList';

function App() {
  const title = 'Huachitos';

  return (
    <>
      <ErrorBoundary>
        <Title title={title} />
      </ErrorBoundary>
      <p className="read-the-dogs">
        Haz click sobre cada animalito para obtener más información
      </p>
      <div className="card">
        <AnimalList />
      </div>
    </>
  )
}

export default App
