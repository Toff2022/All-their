import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../components/ui/navBar";
import Main from "../layout/main";
import Login from "../layout/login";
import Blog from "../layout/blog";
import PhotoAlbum from "../layout/photoAlbum";
import Relatives from "../layout/relatives";

function App () {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/blog" component={Blog} />
                <Route path="/relatives/:relativeId?/:edit?" component={Relatives} />
                <Route path="/photoAlbum" component={PhotoAlbum} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;
// 1) Switch - коммутатор - отображает "1 из", чем конкретнее путь - тем выше в списке роутов
// 2) <Route path="/" render={(routeProps) => <BlogPage {...routeProps} withSidebar/>} /> - как способ отображения компонента BlogPage с передачей props(history, location, match)
