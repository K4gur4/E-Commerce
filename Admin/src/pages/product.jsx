import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Chart from "../components/chart";
import { productData } from "../dummyData";
import PublishIcon from "@mui/icons-material/Publish";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../resquestMethods";
import Topbar from "../components/topbar/Topbar.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import { updateProduct } from "../redux/apiCalls";
const Containerall = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
//for checking
const ProductTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1``;

const ProductAddBtn = styled.button`
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: gray;
  color: white;
  padding: 5px 20px;
  font-weight: 600;
`;

const ProductTop = styled.div`
  display: flex;
`;
const TopLeft = styled.div`
  flex: 1;
  width: 100%;
`;
const TopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  max-height: 200px;
  overflow-y: scroll;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const ProductBot = styled.div`
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;
const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`;
const ProductInfoBot = styled.div`
  margin-top: 10px;
`;
const ProductImg = styled.img`
  width: 100px;
  object-fit: cover;
`;
const ProductName = styled.span`
  font-weight: 600;
`;
const ProductInfoItem = styled.div`
  margin-bottom: 10px;
  display: flex;
`;
const ProductInfoKey = styled.span``;
const ProductInfoValue = styled.span`
  margin-left: 10px;

  &.desc {
    width: 100%;
    font-size: 14px;
  }
`;

const ProductForm = styled.form`
  display: flex;
  justify-content: space-around;
`;
const ProductFormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProductFormLabel = styled.label`
  margin-bottom: 10px;
  color: gray;
`;
const ProductFormInput = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`;
const ProductFormSelect = styled.select`
  margin-bottom: 10px;
`;
const ProductFormOption = styled.option``;
const ProductFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ProductUpload = styled.div`
  display: flex;
  align-items: center;
`;
const ProductFormImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-right: 20px;
`;

const ProductUploadButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: gray;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:disabled{
    background-color: white;
  }
`;

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const dispatch= useDispatch()
  const [pStats, setPStats] = useState([]);
  const [inputs, setInputs] = useState([]);
  const navigate=useNavigate()
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const product = useSelector((state) =>
    state.product.products.allProduct.find(
      (product) => product._id === productId
    )
  );
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("order/income/?pid=" + productId);
        const list = res.data.income?.sort((a, b) => {
          return a._id - b._id;
        });
        list?.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
     await updateProduct(dispatch,productId,inputs);
      navigate('/products')
    } catch (error) {
      alert('error',error.message)
    }
  };
  return (
    <>
      <Topbar />
      <Containerall>
        <Sidebar />
        <Container>
          <ProductTitle>
            <Title>Sản phẩm</Title>
            <Link to="/newProduct">
              <ProductAddBtn>Thêm sản phẩm mới</ProductAddBtn>
            </Link>
          </ProductTitle>
          <ProductTop>
            <TopLeft>
              <Chart
                data={pStats}
                dataKey={"Sales"}
                title="Doanh thu sản phẩm"
              />
            </TopLeft>
            <TopRight>
              <ProductInfoTop>
                <ProductImg src={product.img} alt={product.title} />
                <ProductName>{product.title}</ProductName>
              </ProductInfoTop>
              <ProductInfoBot>
                <ProductInfoItem>
                  <ProductInfoKey>id:</ProductInfoKey>
                  <ProductInfoValue>{product._id}</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>Đơn giá:</ProductInfoKey>
                  <ProductInfoValue>
                    {product.price.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>Khả dụng:</ProductInfoKey>
                  <ProductInfoValue>{product.inStock}</ProductInfoValue>
                </ProductInfoItem>
              </ProductInfoBot>
              <ProductInfoItem>
                <ProductInfoKey>Mô tả:</ProductInfoKey>
                <ProductInfoValue className="desc">
                  {product.desc}
                </ProductInfoValue>
              </ProductInfoItem>
            </TopRight>
          </ProductTop>
          <ProductBot>
            <ProductForm>
              <ProductFormLeft>
                <ProductFormLabel>Tên sản phẩm</ProductFormLabel>
                <ProductFormInput
                  onChange={handleChange}
                  name={"title"}
                  type={"text"}
                  placeholder={product.title}
                />
                <ProductFormLabel>Mô tả</ProductFormLabel>
                <ProductFormInput
                  onChange={handleChange}
                  name={"desc"}
                  type={"text"}
                  placeholder={product.desc}
                />
                <ProductFormLabel>giá</ProductFormLabel>
                <ProductFormInput
                  onChange={handleChange}
                  name={"price"}
                  type={"number"}
                  placeholder={product.price}
                />
                <ProductFormLabel>Khả dụng</ProductFormLabel>
                <ProductFormSelect
                  defaultValue={0}
                  onChange={handleChange}
                  name={"inStock"}
                  id={"inStock"}
                >
                  <ProductFormOption value={0} disabled>
                    setStock
                  </ProductFormOption>
                  <ProductFormOption value={"true"}>Yes</ProductFormOption>
                  <ProductFormOption value={"false"}>No</ProductFormOption>
                </ProductFormSelect>
              </ProductFormLeft>
              <ProductFormRight>
                <ProductUpload>
                  <ProductFormImg src={product.img} />
                  <ProductFormLabel htmlFor="file">
                    <PublishIcon />
                  </ProductFormLabel>
                  <ProductFormInput
                    type={"file"}
                    id={"file"}
                    style={{ display: "none" }}
                  />
                </ProductUpload>
                <ProductUploadButton disabled={inputs.length===0? true:false} onClick={handleUpdate}>
                  Cập nhật sản phẩm
                </ProductUploadButton>
              </ProductFormRight>
            </ProductForm>
          </ProductBot>
        </Container>
      </Containerall>
    </>
  );
};

export default Product;
