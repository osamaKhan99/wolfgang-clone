// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Layout from './layout'
import Home from "./pages/home";
import Gang from "./pages/gang";
import Puppies from "./pages/puppies";
import PageChnager from './widgets/pagination';
import Plant from './pages/plant';
import Header from './widgets/navbar';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/gang" exact component={Gang}/>
        <Route path="/puppies" exact component={Puppies}/>
        <Route path="/gallery" exact component={PageChnager}/>
        <Route path="/plant/:id" component={Plant}/>
      </Switch>
    </div>
  );
}

export default App;
