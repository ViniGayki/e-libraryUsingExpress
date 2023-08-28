import React, { useEffect, useState } from "react";
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from "@coreui/react";

const PublishersList = () => {
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    loadPublishersFromServer();
  }, []);

  const loadPublishersFromServer = async () => {
    const response = await fetch("http://localhost:8080/publishers");
    const resData = await response.json();
    console.log(resData);
    setPublishers(resData);
  };

  return (
    <>
      <h1>PublishersList</h1>

      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope='col'>#</CTableHeaderCell>
            <CTableHeaderCell scope='col'>Publisher-Name</CTableHeaderCell>
            <CTableHeaderCell scope='col'>Description</CTableHeaderCell>
            <CTableHeaderCell scope='col'>Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>

        <CTableBody>
          {publishers.map((publisher) => {
            return (
              <CTableRow key={publisher.id}>
                <CTableHeaderCell scope='row'>{publisher.id}</CTableHeaderCell>
                <CTableDataCell>{publisher.name}</CTableDataCell>
                <CTableDataCell>{publisher.description}</CTableDataCell>
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
export default PublishersList;
