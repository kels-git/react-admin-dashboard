import { Box } from "@mui/material";
import PieChart from "../../components/PieChart";
import Header from "../../components/Header";

const IndexPieContainer = () => {
  return (
    <Box m={"20px"}>
      <Header title={"PIE CHART"} subTitle={"Simple Pie Chart Data"} />
      <Box height={"75vh"}>
        <PieChart />
      </Box>
    </Box>
  );
};

export default IndexPieContainer;
