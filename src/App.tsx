import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Header}  from './components/Header'
import { RecipeList } from './components/RecipeList'
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
     <Route path='/' element = {<RecipeList />} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
