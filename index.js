import { BrowserRouter } from 'react-router-dom'
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))


// This component will be rendered by our <___Router>
const App = () => (
  <div>
    <Header />
    //The <Main> component, is where we will render our routes.
    <Main />
  </div>
)
