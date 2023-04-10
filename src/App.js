import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import {
  IndexDashBoardContainer,
  IndexInvoiceContainer,
  IndexTeamContainer,
  IndexContactsContainer,
  IndexBarContainer,
  IndexFormContainer,
  IndexFaqContainer,
  IndexLineContainer,
  IndexPieContainer,
  IndexGeographyContainer,
  IndexCalendarContainer,
} from "./scenes";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar isSidebar={isSidebar} />
          <main className="content">
            <TopBar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<IndexDashBoardContainer />} />
              <Route path="/team" element={<IndexTeamContainer />} />
              <Route path="/invoices" element={<IndexInvoiceContainer />} />
              <Route path="/contacts" element={<IndexContactsContainer />} />
              <Route path="/bar" element={<IndexBarContainer />} />
              <Route path="/form" element={<IndexFormContainer />} />
              <Route path="/line" element={<IndexLineContainer />} />
              <Route path="/faq" element={<IndexFaqContainer />} />
              <Route path="/pie" element={<IndexPieContainer />} />
              <Route path="/geography" element={<IndexGeographyContainer />} />
              <Route path="/calendar" element={<IndexCalendarContainer />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
