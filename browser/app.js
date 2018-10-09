import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Test from './components/test'

const App = ()=>{
    return(
        <Route path = "/" component = {Test} />
    )
}
export default App