import React from 'react'

import { AwButton } from 'react-aw'

import './App.css'

function App() {

  const [numClicks, setNumClicks] = React.useState(0)
  const [currentTheme, setCurrentTheme] = React.useState('light')

  const sayHello = () => {
    console.log('Hello React - sayHelloNativeEvent')
  }

  const sayHelloCustomEvent = () => {
    console.log('Hello React - sayHelloCustomEvent')
    setNumClicks(state => state + 1)
    
    const body = document.querySelector('body')
    const isLightTheme = body?.classList.contains('light-theme')
    if (isLightTheme) {
      body?.classList.remove('light-theme')
      body?.classList.add('dark-theme')
      setCurrentTheme('Light')
      return
    }
    body?.classList.remove('dark-theme')
    body?.classList.add('light-theme')
    setCurrentTheme('Dark')
    
  }

  React.useEffect(() => {
    document.querySelector('body')?.classList.add('light-theme')
  }, [])

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
          Trocar para o tema {currentTheme}
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
