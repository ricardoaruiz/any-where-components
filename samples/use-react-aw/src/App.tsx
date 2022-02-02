import { AwButton } from 'react-aw'

import './App.css'

function App() {

  const sayHello = () => {
    console.log('Hello React')
  }

  return (
    <div className="container">
        <h1>React</h1>
        <AwButton
          variant='primary'
          blocked
          onClick={sayHello}
        >
          Botão
        </AwButton>
        <AwButton
          variant='warning'
          blocked
          onClick={sayHello}
        >
          Botão
        </AwButton>
      </div>
  );
}

export default App;
