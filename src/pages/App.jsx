import React from 'react'
import {Redirect, Route, Switch} from 'react-router'
import Layout from '../hoc/Layout/Layout'

import AboutUs from './AboutUs/AboutUs'
import Adress from './Adress/Adress'
import FotoGallery from './FotoGallery/FotoGallery'
import Main from './Main/Main'
import Rooms from './Rooms/Rooms'
import Sauna from './Sauna/Sauna'

const App = () => {
  return (
    <Layout>
      <div className="container">
        <Switch>
          <Route path="/gallery" component={FotoGallery} />
          <Route path="/sauna" component={Sauna} />
          <Route path="/adress" component={Adress} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/about" component={AboutUs} />
          <Route path="/" component={Main} exact />
          <Redirect to="/" />
        </Switch>
      </div>
    </Layout>
  )
}

export default App
