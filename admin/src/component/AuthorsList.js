import React, { useEffect, useState } from "react";
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from "@coreui/react";

const AuthorsList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    loadAuthorsFromServer();
  }, []);

  const loadAuthorsFromServer = async () => {
    const response = await fetch("http://localhost:8080/authors");
    const resData = await response.json();
    console.log(resData);
    setAuthors(resData);
  };

  return (
    <>
      <h1>AuthorsList</h1>

      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope='col'>#</CTableHeaderCell>
            <CTableHeaderCell scope='col'>Author-Name</CTableHeaderCell>
            <CTableHeaderCell scope='col'>Description</CTableHeaderCell>
            <CTableHeaderCell scope='col'>Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>

        <CTableBody>
          {authors.map((author) => {
            return (
              <CTableRow key={author.id}>
                <CTableHeaderCell scope='row'>{author.id}</CTableHeaderCell>
                <CTableDataCell>{author.name}</CTableDataCell>
                <CTableDataCell>{author.description}</CTableDataCell>
                <CTableDataCell>
                  <button>Edit</button>
                </CTableDataCell>
                <CTableDataCell>
                  <button>Delete</button>
                </CTableDataCell>
              </CTableRow>
            );
          })}
        </CTableBody>
      </CTable>
    </>
  );
};
export default AuthorsList;
