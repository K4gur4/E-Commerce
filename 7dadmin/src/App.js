import Sidebar from "./components/sidebar/Sidebar.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import styled from "styled-components";
import Home from "./pages/home/home.jsx";
const Container= styled.div`
display: flex;
margin-top: 10px;
`


function App() {
  return (
   <>
   <Topbar/>
   <Container>
   <Sidebar/>
   <Home/>
   </Container>
   </>
  );
}

export default App;
