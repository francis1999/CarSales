import {useState}from 'react';
import {useQuery}from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Nav from './Nav';




export type CarDetails={
  id:number;
  title:string;
  imageUrl:string;
  year:string;
  city:string;
  state:string;
}

const getCars=async():Promise<CarDetails[]> =>
  await (await fetch('https://api-prod.autochek.africa/v1/inventory/car/search')).json()
const App=()=> {
  const {data, isLoading, error}=useQuery<CarDetails[]>(
    'cars',
     getCars
  );
  console.log(data);
  const handleCardetail=()=>null;
  const handleDeleteCar=()=>null;
  if(isLoading)return<LinearProgress/>
  if(error)return<div>Error in Connection</div>;
  return (
    
    <Router>
        <Nav/>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>  
    </div>
    </Router>
  );
}

export default App;
