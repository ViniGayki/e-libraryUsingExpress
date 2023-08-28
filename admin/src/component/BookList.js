import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from "@coreui/react";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooksFromServer();
  }, []);

  const loadBooksFromServer = async () => {
    const response = await fetch("http://localhost:8080/books");
    const resData = await response.json();
    console.log(resData);
    setBooks(resData);
  };

  return (
    <>
      <h1>BookList</h1>

      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope='col'>#</CTableHeaderCell>
            <CTableHeaderCell scope='col'>Name</CTableHeaderCell>
            <CTableHeaderCell scope='col'>Publisher-Name</CTableHeaderCell>
            <CTableHeaderCell scope='col'>Auther-Name</CTableHeaderCell>
            <CTableHeaderCell scope='col'>No-of-pages</CTableHeaderCell>
            <CTableHeaderCell scope='col'>Language</CTableHeaderCell>
            <CTableHeaderCell scope='col'>Category</CTableHeaderCell>
            <CTableHeaderCell scope='col'>Sub-Category</CTableHeaderCell>
            <CTableHeaderCell scope='col'>Publish_date</CTableHeaderCell>
            <CTableHeaderCell scope='col'>Price</CTableHeaderCell>
            <CTableHeaderCell scope='col'>Book-of-PDF</CTableHeaderCell>
            <CTableHeaderCell scope='col'>Note</CTableHeaderCell>
            <CTableHeaderCell scope='col'>Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>

        <CTableBody>
          {books.map((book) => {
            return (
              <CTableRow key={book.id}>
                <CTableHeaderCell scope='row'>{book.id}</CTableHeaderCell>
                <CTableDataCell>{book.name}</CTableDataCell>
                <CTableDataCell>{book.publisher_id}</CTableDataCell>
                <CTableDataCell>{book.auther_id}</CTableDataCell>
                <CTableDataCell>{book.no_of_pages}</CTableDataCell>
                <CTableDataCell>{book.language}</CTableDataCell>
                <CTableDataCell>{book.category_id}</CTableDataCell>
                <CTableDataCell>{book.sub_category_id}</CTableDataCell>
                <CTableDataCell>{book.publish_date}</CTableDataCell>
                <CTableDataCell>{book.price}</CTableDataCell>
                <CTableDataCell>{book.book_pdf}</CTableDataCell>
                <CTableDataCell>{book.note}</CTableDataCell>
                <CTableDataCell>
                  <NavLink to={"/editbooks/" + book.id}>EDIT</NavLink>
                </CTableDataCell>
                {/* <CTableDataCell>
                  <button>Delete</button>
                </CTableDataCell> */}
              </CTableRow>
            );
          })}
        </CTableBody>
      </CTable>
    </>
  );
};
export default BookList;
