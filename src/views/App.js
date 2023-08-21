import logo from './logo.svg';
import './App.scss';

import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './Nav/Nav';
import Home from './Example/Home';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';
/*
-  2 components: class components / function components (function, arrow)
*/

//const App = () => {
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <img src={logo} className="App-logo" alt="logo" />
                    {/* <p className="style">Simple TODO Apps with React (Tuan DT)</p> */}
                    {/* <MyComponent/>
                <ListTodo/> */}
                    <Switch>
                        {/* <Route path="/" element={<Home />} />
                        <Route path="/todo" element={<ListTodo />} />
                        <Route path="/about" element={<MyComponent />} />
                        <Route path="/user" element={<ListUser />} exact />
                        <Route path="/user/:id" element={<DetailUser exact />} /> */}
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/todo">
                            <ListTodo />
                        </Route>
                        <Route path="/about">
                            <MyComponent />
                        </Route>
                        <Route path="/user" exact>
                            <ListUser />
                        </Route>
                        <Route path="/user/:id">
                            <DetailUser />
                        </Route>
                    </Switch>
                </header>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    theme="dark"
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
