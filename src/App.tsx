import { OverlayTree } from "./components";
import { AppRouter } from "./routes";

function App() {
  return (
    <OverlayTree>
      <AppRouter />
    </OverlayTree>
  );
}

export default App;