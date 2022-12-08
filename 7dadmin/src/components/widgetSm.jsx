import styled from "styled-components"
import VisibilityIcon from '@mui/icons-material/Visibility';

const Container = styled.div`
    flex: 1;
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75) ;
    padding: 20px;
    margin-right: 20px;
`

const Title = styled.span`
font-size: 22px;
font-weight: 600;
`

const WidgetList= styled.ul`
 margin: 0;
 padding: 0;
 list-style: none;
`
const WidgetListItem= styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
`

const WidgetUser= styled.div`
    display: flex;
    flex-direction: column;
`
const WidgetUserName= styled.span`
    font-weight: 600;
`
const WidgetUserEmail= styled.span`
font-weight: 300;
`
const Button = styled.button`
display: flex;
align-items: center;
border: none;
border-radius: 10px;
padding: 7px 10px;
cursor: pointer;
background-color: #eeeef7;
color: #555;

.icon{
    font-style: 16px;
    margin-right: 5px;
}
`


const WidgetSm =()=>{
    return (
        <Container>
            <Title>Người dùng</Title>
            <WidgetList>
                <WidgetListItem>
                    <WidgetUser>
                        <WidgetUserName>Admin 1</WidgetUserName>
                        <WidgetUserEmail>vuducthinhkmt@gmail.com</WidgetUserEmail>
                    </WidgetUser>
                    <Button> <VisibilityIcon/> Display </Button>
                </WidgetListItem>
                <WidgetListItem>
                    <WidgetUser>
                        <WidgetUserName>Admin 2</WidgetUserName>
                        <WidgetUserEmail>vuducthinhkmt@gmail.com</WidgetUserEmail>
                    </WidgetUser>
                    <Button> <VisibilityIcon/> Display </Button>
                </WidgetListItem>
                <WidgetListItem>
                    <WidgetUser>
                        <WidgetUserName>Admin 3</WidgetUserName>
                        <WidgetUserEmail>vuducthinhkmt@gmail.com</WidgetUserEmail>
                    </WidgetUser>
                    <Button> <VisibilityIcon/> Display </Button>
                </WidgetListItem>
                <WidgetListItem>
                    <WidgetUser>
                        <WidgetUserName>Admin 4</WidgetUserName>
                        <WidgetUserEmail>vuducthinhkmt@gmail.com</WidgetUserEmail>
                    </WidgetUser>
                    <Button> <VisibilityIcon/> Display </Button>
                </WidgetListItem>
                <WidgetListItem>
                    <WidgetUser>
                        <WidgetUserName>Admin 5</WidgetUserName>
                        <WidgetUserEmail>vuducthinhkmt@gmail.com</WidgetUserEmail>
                    </WidgetUser>
                    <Button> <VisibilityIcon className="icon"/> Display </Button>
                </WidgetListItem>
            </WidgetList>
        </Container>
    )
}


export default WidgetSm