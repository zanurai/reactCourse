import { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')//wheater dark mode is enable0r not // after the set of light mode the navbar will be change in whitecolor
  const [alert, setAlert] = useState(null)//

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {

    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = "white"//background color changed when navber is Enable to light
      showAlert("dark mode has been enabled", "success")
      document.title = "TextUtile-Light Mode"// change the title in dark mood 

      setInterval(() => {
        document.title = "TextUtile is Amazing Mode"//title change
      }, 2000)

      setInterval(() => {
        document.title = "install TextUtile now"//title change
      }, 1500)
    } else {
      setMode('dark')
      document.body.style.backgroundColor = "#042744"//background color changed when navber is Enable to dark
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtile-Dark Mode" // change the title in light mood
    }

  }
  return (
    <>
      {/*<Navbar title="textUtile" aboutText="about " />*/}
      {/*<Navbar />*/}

      <Router>
        <Navbar title="textUtitle" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">

          <Routes>
            <Route exact path="/about"
              element={<About />}>
            </Route>
            <Route exact path="/"
              element={<TextForm showAlert={showAlert} /*alertfor function*/ heading="Enter the text analyze" mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
