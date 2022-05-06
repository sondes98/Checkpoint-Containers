import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import Signup from './containers/Users/Signup/Signup';
import Login from './containers/Users/Login/Login';
import FullArticle from './containers/Articles/FullArticle/FullArticle';
import AddArticle from './containers/Articles/AddArticle/AddArticle';
import EditArticle from './containers/Articles/EditArticle/EditArticle';
import NavigationBar from './containers/NavigationBar/NavigationBar';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <NavigationBar />
                <Routes>
                    <Route path="/article/add" element={<AddArticle/>} />
                    <Route path="/article/edit/:id" element={<EditArticle/>} />
                    <Route path="/articles/:id" element={<FullArticle/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/" element={<Home/>} />
                </Routes>
            </div>
        );
    }
}

export default App;
