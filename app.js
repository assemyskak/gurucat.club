const e = React.createElement

function ComingSoon() {}

function App() {
  console.log(`app`)
  return e('div', {}, 'hello')
}

export default App
