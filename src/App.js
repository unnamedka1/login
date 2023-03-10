import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { useAuthContext } from "./hooks/useAuthContext";
import Navbar from "./components/navbar";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
    const { authIsReady } = useAuthContext();
    return (
        <div className="App">
            {authIsReady && (
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/signup">
                            <Signup />
                        </Route>
                    </Switch>
                </BrowserRouter>
            )}
        </div>
    );
}

export default App;
