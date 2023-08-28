import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import BookList from "./component/BookList";
import Addbooks from "./component/Addbooks";
import PublishersList from "./component/PublishersList";
import AuthorsList from "./component/AuthorsList";
import Editbooks from "./component/Editbooks";

function App() {
  return (
    <div className='App'>
      <div className='row'>
        <div className='col-md-2'>
          <Sidebar />
        </div>
        <div className='col-md-10'>
          <Routes>
            <Route path='/addbooks' element={<Addbooks />}></Route>
            <Route path='/bookList' element={<BookList />}></Route>
            <Route path='/authorsList' element={<AuthorsList />}></Route>
            <Route path='/publishersList' element={<PublishersList />}></Route>
            <Route path='/editbooks/:id' element={<Editbooks />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
