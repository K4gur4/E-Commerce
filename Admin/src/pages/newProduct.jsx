import { useState } from "react";
import styled from "styled-components";
import {
  getStorage,ref,uploadBytesResumable,getDownloadURL
} from "firebase/storage"
import app from "../firebase";
import { addProduct } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import Topbar from "../components/topbar/Topbar.jsx";
import Sidebar from '../components/sidebar/Sidebar.jsx'
const Containerall = styled.div`
  display: flex;
  margin-top: 10px;
`;
//for checking
const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const Title = styled.h1``;

const AddProductFrom = styled.form`
margin-top: 10px;

`;
const AddproductItem = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;
const AddproductLabel = styled.label`
    color: gray;
    font-weight: 600;
    margin-top: 10px;
`;
const AddproductInput = styled.input`
padding: 10px;
`;

const AddproductBtn= styled.button`
    margin-top: 10px;
    padding: 7px 10px;
    border: none;
    border-radius: 10px;
    background-color: gray;
    color: white;
    font-weight: 600;
    cursor: pointer;
`
const NewProduct = () => {
  const [inputs,setInputs]= useState([])
  const [file,setFile]= useState([])
  const [cat,setCat]= useState([])
  const [color,setColor]= useState([])
  const dispatch= useDispatch()
  const handleChange= (e)=>{
    setInputs(prev=>{
      return {...prev, [e.target.name]:e.target.value}
    })

  }
  const handleCat= (e)=>{
    setCat(e.target.value.split(","))
  }

  const handleColor= (e)=>{
    setColor(e.target.value.split(","))
  }
  const handleClick= (e)=>{
      e.preventDefault()
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app)
      const storageRef= ref(storage,fileName)

      const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat,color:color };
          addProduct(product, dispatch);
        });
      }
    );

  }


  return (
    <>
    <Topbar/>
    <Containerall>
      <Sidebar/>
      
    <Container>
      <Title>Thêm Sản phẩm mới</Title>
      <AddProductFrom>
        <AddproductItem>
          <AddproductLabel>Hình ảnh</AddproductLabel>
          <AddproductInput type={"file"} id={"file"} onChange= {e=>setFile(e.target.files[0])} />
        </AddproductItem>
        <AddproductItem>
          <AddproductLabel>Tên sản phẩm</AddproductLabel>
          <AddproductInput name="title" type={"text"} onChange={handleChange}/>
        </AddproductItem>
        <AddproductItem>
          <AddproductLabel>Mô tả:</AddproductLabel>
          <AddproductInput name="desc" type={"text"} onChange={handleChange}/>
        </AddproductItem>
        <AddproductItem>
          <AddproductLabel>Khả dụng</AddproductLabel>
          <select name="inStock" onChange={handleChange}>
            <option value={'0'} disabled></option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </AddproductItem>
        <AddproductItem>
          <AddproductLabel>Danh mục</AddproductLabel>
          <AddproductInput name="categories" type={"text"} onChange={handleCat} placeholder="Tên loại sản phẩm"/>
        </AddproductItem>
        <AddproductItem>
          <AddproductLabel>Màu sắc</AddproductLabel>
          <AddproductInput name="color" type={"text"} onChange={handleColor}/>
        </AddproductItem>
        <AddproductItem>
          <AddproductLabel>Đơn giá</AddproductLabel>
          <AddproductInput name="price" type={"number"} onChange={handleChange}/>
        </AddproductItem>
        <AddproductBtn  onClick={handleClick}>Thêm sản phẩm</AddproductBtn>
      </AddProductFrom>
    </Container>
    </Containerall>
    </>
  );
};

export default NewProduct;
