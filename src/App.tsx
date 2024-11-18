import './App.css'
import CountryList from './components/CountryList'
import Header from './components/Header'
const App = () => {
  return (
    <div>
      <Header title='Countries' />
      <CountryList/>
    </div>
  )
}

export default App
