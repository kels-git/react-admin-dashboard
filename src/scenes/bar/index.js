import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";
import Header from "../../components/Header";

const IndexBarContainer = () => {
  return (
    <Box m={"20px"}>
      <Header
        title={"BAR CHART"}
        subTitle={"The bar can be displayed anytime"}
      />
      <Box height={"75vh"}>
        <BarChart />
      </Box>
    </Box>
  );
};

export default IndexBarContainer;
