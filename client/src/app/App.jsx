import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../layout/navBar";
import MainPage from "../layout/mainPage";
import LoginPage from "../layout/loginPage";
import FamilyTree from "../layout/familyTree";
import BlogPage from "../layout/blogPage";
import PhotoAlbum from "../layout/photoAlbum";
// import UserPage from "../components/common/userPage";

function App () {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/blogPage" component={BlogPage} />
                <Route path="/familyTree/:relativId?" component={FamilyTree} />
                <Route path="/photoAlbum" component={PhotoAlbum} />
                <Route path="/loginPage/:type?" component={LoginPage} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;
// 1) Switch - коммутатор - отображает "1 из", чем конкретнее путь - тем выше в списке роутов
// 2) <Route path="/" render={(routeProps) => <BlogPage {...routeProps} withSidebar/>} /> - как способ отображения компонента BlogPage с передачей props(history, location, match)
