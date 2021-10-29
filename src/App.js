import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddPackages from './components/AddPackages/AddPackages';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageOrders from './components/ManageOrders/ManageOrders';
import MyOrders from './components/MyOrders/MyOrders';
import OrderConfirmed from './components/OrderConfirmed/OrderConfirmed';
import PackageDetail from './components/PackageDetail/PackageDetail';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path='/orderConfirmed'>
              <OrderConfirmed></OrderConfirmed>
            </PrivateRoute>
            <PrivateRoute path="/package/detail/:id">
              <PackageDetail></PackageDetail>
            </PrivateRoute>
            <PrivateRoute path="/addPackages">
              <AddPackages></AddPackages>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
