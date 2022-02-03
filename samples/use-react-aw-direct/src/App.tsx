import React from 'react'
import './App.css';

function App() {

  const primaryRef = React.useRef<HTMLElement | null>()

  const sayHello = () => {
    console.log('Hello React Direct')
  }

  const sayHelloCustomEvent = () => {
    console.log('Hello React Direct - sayHelloCustomEvent')
  }

  React.useEffect(() => {
    primaryRef.current?.addEventListener('awClicked', sayHelloCustomEvent)

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      primaryRef.current?.removeEventListener('awClicked', sayHelloCustomEvent)
    }
  }, [])

  return (
    <div className="container">
      <h1>React</h1>
      <h2>Without Wrapper Lib React</h2>

      <aw-button
        ref={primaryRef}
        variant='primary'
        blocked
        onClick={sayHello}
      >
        Botão
      </aw-button>
      <aw-button
        variant='warning'
        blocked
        disabled
        onClick={sayHello}
      >
        Botão
      </aw-button>
    </div>
  );
}

export default App;
