import styled from "styled-components";

const Container = styled.div`
  flex: 2;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const WidgetTable = styled.table`
width: 100%;
border-spacing: 20px;

`;
const WidgetTableTr = styled.tr``;

const WidgetTableTh = styled.th`
text-align: left;
`;
const WidgetTableTd = styled.td``;

const WidgetTableImg = styled.img``;
const WidgetTableName = styled.span`
`;
const WidgetTableDate = styled.span`
font-weight: 300;

`;
const WidgetTableAmount = styled.span`
font-weight: 300;
`;
const WidgetTableStatus = styled.span``;
const WidgetTableButton = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background: ${(props) =>
    props.type === "Đã xác nhận"
      ? "#e5faf2"
      : props.type === "Đã giao"
      ? "#e5faf2"
      : props.type === "Đã hủy"
      ? "#fff0f1"
      : "#ebf1fe"};
    color: black;
`;

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <WidgetTableButton type={type}>{type}</WidgetTableButton>;
  };

  return (
    <Container>
      <Title>Đơn hàng gần nhất</Title>
      <WidgetTable>
        <WidgetTableTr>
          <WidgetTableTh>Khách hàng</WidgetTableTh>
          <WidgetTableTh>Ngày tạo</WidgetTableTh>
          <WidgetTableTh>Tổng cộng</WidgetTableTh>
          <WidgetTableTh>Trạng thái</WidgetTableTh>
        </WidgetTableTr>
        <WidgetTableTr>
          <WidgetTableTd>
            <WidgetTableName>Admin1</WidgetTableName>
          </WidgetTableTd>
          <WidgetTableTd>
            <WidgetTableDate>7/12/2022</WidgetTableDate>
          </WidgetTableTd>
          <WidgetTableTd>
            <WidgetTableAmount>7.000.000 VND</WidgetTableAmount>
          </WidgetTableTd>
          <WidgetTableTd>
            <WidgetTableStatus>
              <Button type="Đã xác nhận" />
            </WidgetTableStatus>
          </WidgetTableTd>
        </WidgetTableTr>
        <WidgetTableTr>
          <WidgetTableTd>
            <WidgetTableName>Admin2</WidgetTableName>
          </WidgetTableTd>
          <WidgetTableTd>
            <WidgetTableDate>7/12/2022</WidgetTableDate>
          </WidgetTableTd>
          <WidgetTableTd>
            <WidgetTableAmount>7.000.000 VND</WidgetTableAmount>
          </WidgetTableTd>
          <WidgetTableTd>
            <WidgetTableStatus>
              <Button type="Đã hủy" />
            </WidgetTableStatus>
          </WidgetTableTd>
        </WidgetTableTr>
        <WidgetTableTr>
          <WidgetTableTd>
            <WidgetTableName>Admin3</WidgetTableName>
          </WidgetTableTd>
          <WidgetTableTd>
            <WidgetTableDate>7/12/2022</WidgetTableDate>
          </WidgetTableTd>
          <WidgetTableTd>
            <WidgetTableAmount>7.000.000 VND</WidgetTableAmount>
          </WidgetTableTd>
          <WidgetTableTd>
            <WidgetTableStatus>
              <Button type="Đã giao" />
            </WidgetTableStatus>
          </WidgetTableTd>
        </WidgetTableTr>
        <WidgetTableTr>
          <WidgetTableTd>
            <WidgetTableName>Admin4</WidgetTableName>
          </WidgetTableTd>
          <WidgetTableTd>
            <WidgetTableDate>7/12/2022</WidgetTableDate>
          </WidgetTableTd>
          <WidgetTableTd>
            <WidgetTableAmount>7.000.000 VND</WidgetTableAmount>
          </WidgetTableTd>
          <WidgetTableTd>
            <WidgetTableStatus>
              <Button type="Chờ xác nhận" />
            </WidgetTableStatus>
          </WidgetTableTd>
        </WidgetTableTr>
        <WidgetTableTr>
          <WidgetTableTd>
            <WidgetTableName>Admin5</WidgetTableName>
          </WidgetTableTd>
          <WidgetTableTd>
            <WidgetTableDate>7/12/2022</WidgetTableDate>
          </WidgetTableTd>
          <WidgetTableTd>
            <WidgetTableAmount>7.000.000 VND</WidgetTableAmount>
          </WidgetTableTd>
          <WidgetTableTd>
            <WidgetTableStatus>
              <Button type="Đã giao" />
            </WidgetTableStatus>
          </WidgetTableTd>
        </WidgetTableTr>
      </WidgetTable>
    </Container>
  );
};

export default WidgetLg;
