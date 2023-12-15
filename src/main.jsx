import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
//import { Chart } from 'chart.js/auto';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme appearance="dark" accentColor="cyan" grayColor="sage" panelBackground="solid">
      <App />
    </Theme>
  </React.StrictMode>,
)
