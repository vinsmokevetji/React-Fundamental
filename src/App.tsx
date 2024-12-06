import "./App.scss";
import useRouteElements from "src/routes/useRouteElements";

function App() {
  const routerElements = useRouteElements();
  return <>{routerElements}</>;
}

export default App;
