import React, { useState } from "react";
import About from "./components/About.js";
import Alert from "./components/Alert.js";

import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";

/*import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";*/


function App() {
    const [mode, setMode] = useState('light')//by default false 
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500)
    }

    const toggleMode = () => {
        if (mode === 'dark') {
            setMode('light')
            document.body.style.backgroundColor = 'white'
            showAlert("light mode has been enabled", "success")
            document.title = "TextUtile-light mode"


            setInterval(() => {
                document.title = "textUtile is Amazing"
            }, 2000)

            setInterval(() => {
                document.title = "install textUtile now"
            }, 1500)


        } else {
            setMode('dark')
            document.body.style.backgroundColor = 'black'
            showAlert("Dark mode has been enabled", "success")
            document.title = "TextUtile-dark mode"
        }
    }
    return (
        <>
            {/*<Router>*/}
            <Navbar title={"textUtile"} about={"About-All"} mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />

            <div className="container my-3">

                {/*<Routes>
                        <Route path="/about"
                            element={<About />}>
                        </Route>

                        <Route path="/"
                            element={<TextForm showAlert={showAlert} heading={"Enter the Text To Analyze"} mode={mode} />}>

                        </Route>
            </Routes>*/}
                <TextForm showAlert={showAlert} heading={"Enter the Text To Analyze"} mode={mode} />
                <About />
            </div>
            {/*</></Router>*/}
        </>
    )

}

export default App;
