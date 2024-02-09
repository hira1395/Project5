import "./App.css";
import Navigation from "./components/Navigation.component";
import Home from "./components/home.component";
import Products from "./components/products.component";
import Product from "./components/product.component";
import Posts from "./components/posts.component";
import Admin from "./components/admin.component";
import NotFound from "./components/not-found.component";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route
          path="/home"
          render={(props) => <Home selected={true} {...props} />}
        />
        <Route path="/posts/:year?/:month?" component={Posts} />
        <Route path="/products/:id" component={Product} />
        <Route path="/products/" component={Products} />
        <Route path="/admin" component={Admin} />
        <Route path="/not-found" component={NotFound} />
        <Route exact path="/" component={Home} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
}

export default App;
