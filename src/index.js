import React from 'react'
import Relay from 'react-relay'
import ReactDOM from 'react-dom'
import PokemonPage from './views/PokemonPage'
import ListPage from './views/ListPage'
import { Router, Route, browserHistory, applyRouterMiddleware } from 'react-router'
import useRelay from 'react-router-relay'
import './index.css'

// copy your GraphQL endpoint from above to package.json and index.js
Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://api.graph.cool/relay/v1/cj12foxk3to270138dxr76zb3')
)

// Many queries in Relay are wrapped by the so called viewer object.
// We can define it once and use it whenever we want to make a query against the viewer field:
const ViewerQueries = { viewer: () => Relay.QL`query { viewer }` }

ReactDOM.render(
  <Router
    forceFetch
    environment={Relay.Store}
    render={applyRouterMiddleware(useRelay)}
    history={browserHistory}
  >
  // assign various components to new routes
    <Route path='/' component={ListPage} queries={ViewerQueries} />
    <Route path='/create' component={PokemonPage} queries={ViewerQueries} />
    <Route path='/view/:id' component={PokemonPage} queries={ViewerQueries} />
  </Router>
  , document.getElementById('root')
)
