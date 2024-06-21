import Display from './components/ui/display'

function App() {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()

  return (
    <main className="flex justify-center items-center h-full">
      <div className="flex flex-row space-x-8">
        <Display value={Math.floor(hours / 10)} />
        <Display value={hours % 10} />
        <Display value={Math.floor(minutes / 10)} />
        <Display value={minutes % 10} />
      </div>
    </main>
  )
}

export default App
