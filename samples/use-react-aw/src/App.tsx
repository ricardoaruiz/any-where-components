import React from 'react'
import { AwButton } from 'react-aw'

import './App.css'

function App() {

  const [numClicks, setNumClicks] = React.useState(0)

  const sayHello = () => {
    console.log('Hello React - sayHelloNativeEvent')
  }

  const sayHelloCustomEvent = () => {
    console.log('Hello React - sayHelloCustomEvent')
    setNumClicks(state => state + 1)
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
        <p>This button was clicked {numClicks} times</p>

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
