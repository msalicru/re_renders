import React, { useCallback, useMemo, useState } from 'react'
import './App.css'

const CounterComponent = ({ counter }) => {
  console.log(`🦊 CounterComponent rendered ${counter}`)

  return <div style={{ margin: '20px' }}>Counter: {counter}</div>
}

const MemoCounterComponent = React.memo(CounterComponent)

const ColorComponent = ({ params, onClick }) => {
  console.log(`🎩 ColorComponent rendered ${params.color}`)
  return (
    <div
      className='colorCompo'
      style={{
        background: params.color,
      }}></div>
  )
}

const MemoColorComponent = React.memo(ColorComponent)

function App() {
  const [counter, setCounter] = useState(0)
  const [color, setColor] = useState('red')

  console.log('🚀 ~ App ~ Rendered', counter)

  const params = useMemo(
    () => ({
      color,
    }),
    [color]
  )

  const onClick = useCallback(() => {}, [])

  return (
    <div className='App'>
      <button
        className='button'
        onClick={() => setCounter((counter) => counter + 1)}>
        Update Counter
      </button>
      <button
        className='button'
        onClick={() => setColor((color) => (color === 'red' ? 'blue' : 'red'))}>
        Update Color
      </button>
      <div className='container'>
        <MemoCounterComponent counter={counter} />
        <MemoColorComponent params={params} onClick={onClick} />
      </div>
    </div>
  )
}

export default App
