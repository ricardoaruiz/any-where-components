import { AwButton } from 'react-aw'

import './App.css'

function App() {

  const sayHello = () => {
    console.log('Hello React')
  }

  const sayHelloCustomEvent = () => {
    console.log('Hello React - sayHelloCustomEvent')
  }

  return (
    <div className="container">
        <h1>React</h1>
        <h2>With Wrapper Lib React</h2>

        <AwButton
          variant='primary'
          blocked
          onClick={sayHello}
          onAwClicked={sayHelloCustomEvent}
        >
          Botão
        </AwButton>
        <AwButton
          variant='warning'
          blocked
          disabled
          onClick={sayHello}
          onAwClicked={sayHelloCustomEvent}
        >
          Botão
        </AwButton>
      </div>
  );
}

export default App;
