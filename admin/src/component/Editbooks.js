import React, { useState, useEffect } from "react";
import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CButton,
} from "@coreui/react";
import { json } from "react-router-dom";

const Editbooks = () => {
  // const [book, setBook] = useState({})
  const [name, setName] = useState();
  const [publisher_id, setPublisher_id] = useState();
  const [auther_id, setAuther_id] = useState();
  const [no_of_pages, setNo_of_pages] = useState();
  const [language, setLanguage] = useState();
  const [category_id, setCategory_id] = useState();
  const [sub_category_id, setSub_category_id] = useState();
  const [publish_date, setPublish_date] = useState();
  const [price, setPrice] = useState();
  const [book_pdf, setBook_pdf] = useState();
  const [note, setNote] = useState();

  const uploadBookDetails = async (e) => {
    e.preventDefault();

    const requestOption = {
      method: "POST",
      headers: { "Content-Type": "application / json" },
      body: JSON.stringify({
        name: name,
        publisher_id: publisher_id,
        auther_id: auther_id,
        no_of_pages: no_of_pages,
        language: language,
        category_id: category_id,
        sub_category_id: sub_category_id,
        publish_date: publish_date,
        price: price,
        book_pdf: book_pdf,
        note: note,
      }),
    };

    const response = await fetch("http://localhost:8080/books", requestOption);
    const resData = await response.json();
    console.log(resData);
    // setBook(resData)
  };

  //   const handleClick = () => {
  //     // 👇️ clear input value
  //     setName("");
  //   };
  return (
    <React.Fragment>
      <h2>Addbooks</h2>

      <CForm method='post' onSubmit={uploadBookDetails}>
        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlInput1' className='labelform1'>
            Book Name
          </CFormLabel>
          <CFormInput
            type='text'
            onChange={(e) => setName(e.target.value)}
            id=''
            placeholder='Enter the book name'
          />
        </div>

        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlInput1' className='labelform1'>
            Publisher Name
          </CFormLabel>
          <CFormInput
            type='text'
            onChange={(e) => setPublisher_id(e.target.value)}
            id=''
            placeholder='Enter the book Publisher name'
          />
        </div>
        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlInput1' className='labelform1'>
            Auther Name
          </CFormLabel>
          <CFormInput
            type='text'
            onChange={(e) => setAuther_id(e.target.value)}
            id=''
            placeholder='Enter the book Auther name'
          />
        </div>
        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlInput1' className='labelform1'>
            No-of-page
          </CFormLabel>
          <CFormInput
            type='text'
            onChange={(e) => setNo_of_pages(e.target.value)}
            id=''
            placeholder='Enter the No-of-Page'
          />
        </div>

        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlInput1' className='labelform1'>
            Language
          </CFormLabel>
          <CFormInput
            type='text'
            onChange={(e) => setLanguage(e.target.value)}
            id=''
            placeholder='Enter the book Language '
          />
        </div>

        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlInput1' className='labelform1'>
            Category
          </CFormLabel>
          <CFormInput
            type='text'
            onChange={(e) => setCategory_id(e.target.value)}
            id=''
            placeholder='Enter the  book Category'
          />
        </div>

        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlInput1' className='labelform1'>
            Sub Category
          </CFormLabel>
          <CFormInput
            type='text'
            onChange={(e) => setSub_category_id(e.target.value)}
            id=''
            placeholder='Enter the  book Sub category'
          />
        </div>

        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlInput1' className='labelform1'>
            Publish_date
          </CFormLabel>
          <CFormInput
            type='date'
            onChange={(e) => setPublish_date(e.target.value)}
            id=''
            placeholder='Enter the book Publish_date'
          />
        </div>

        <div className='mb-3'>
          <CFormLabel htmlFor='exampleFormControlInput1' className='labelform1'>
            Price
          </CFormLabel>
          <CFormInput
            type='text'
            onChange={(e) => setPrice(e.target.value)}
            id=''
            placeholder='Enter the book Price'
          />
        </div>

        <div className='mb-3'>
          <CFormLabel htmlFor='formFile' className='labelform1'>
            Book PDF
          </CFormLabel>
          <CFormInput
            type='file'
            onChange={(e) => setBook_pdf(e.target.value)}
            id='formFile'
            placeholder='Attached the Book of PDF'
          />
        </div>

        <div className='mb-3'>
          <CFormLabel
            htmlFor='exampleFormControlTextarea1'
            className='labelform1'>
            Note
          </CFormLabel>
          <CFormTextarea
            id='exampleFormControlTextarea1'
            onChange={(e) => setNote(e.target.value)}
            rows={3}></CFormTextarea>
        </div>

        <input name='submit' type='submit' />

        {/* <CButton color="primary" onClick={submitform}>
          SAVE
        </CButton> */}
      </CForm>
    </React.Fragment>
  );
};

export default Editbooks;
