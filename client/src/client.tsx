import React from 'react'
import ReactDOM from 'react-dom'

import { mockAxios } from '../dev/mock-axios';
import { axios } from './axios';
import { App } from './components/App'

import './styles.scss'

// mockAxios(axios)

ReactDOM.render(<App />, document.querySelector('#root'))
