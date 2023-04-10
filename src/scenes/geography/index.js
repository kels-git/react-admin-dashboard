import { Box } from "@mui/material";
import Header from "../../components/Header";
import MapChart from "../../components/MapChart";

const IndexGeographyContainer = () => {
  return (
    <Box m={"20px"}>
      <Header title={"GEOGRAPHY  CHART"} subTitle={"Simple Line Chart Data"} />
      <Box height={"75vh"} width={"100%"}>
        <MapChart />
      </Box>
    </Box>
  );
};

export default IndexGeographyContainer;
