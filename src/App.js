
import {observer} from "mobx-react-lite";
import Index from "./components";
import {BrowserRouter} from "react-router-dom";

const App = observer (() => {
  return (
      <BrowserRouter>
        <Index />
      </BrowserRouter>
  )
})

export default App;
