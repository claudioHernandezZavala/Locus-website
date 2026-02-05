import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Locus</h1>
      <p className="text-gray-600 mb-4">
        React + Vite + Tailwind CSS
      </p>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        count is {count}
      </button>
    </div>
  )
}

export default App
