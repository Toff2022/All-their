import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./layout/navBar"
import MainPage from "./layout/mainPage";
import LoginPage from "./layout/loginPage";
import FamilyTree from "./components/familyTree";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/familyTree" component={FamilyTree} />
                <Route path="/loginPage" component={LoginPage} />
                <Redirect to="/404" />
            </Switch>
        </>
    );
}

export default App;
