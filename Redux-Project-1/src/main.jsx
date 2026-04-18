import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { Provider } from 'react-redux';
import todoStore from './store/todo_store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={todoStore}>
      <App />
    </Provider>
  </StrictMode>,
)
