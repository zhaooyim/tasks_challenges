import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App'

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <App />,
//     document.getElementById('app')
//   )
// })

createRoot(document.getElementById('app')).render(<App />)
