import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const IndexLineContainer = () => {
  return (
    <Box m={"20px"}>
      <Header title={"LINE  CHART"} subTitle={"Simple Line Chart Data"} />
      <Box height={"75vh"} width={"100%"}>
        <LineChart />
      </Box>
    </Box>
  );
};

export default IndexLineContainer;
