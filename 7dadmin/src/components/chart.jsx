import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Container = styled.div`
  margin: 20px;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;

const Chart = ({title,data,dataKey,grid}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey={"name"} stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip/>
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
          
          <Legend/>
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Chart;
