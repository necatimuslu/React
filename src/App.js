import "./App.css";

import { Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import Login from "./components/Login";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PostDetail from "./components/posts/post/PostDetail";
import UpdateForm from "./components/form/UpdateForm";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route path="/" component={Container} exact />
        <Route path="/post/:id" component={PostDetail} exact />
        <Route path="/update/:id" component={UpdateForm} exact />
        <Route path="/login" component={Login} exact />

        <Route path="/register" component={Register} />
      </Switch>
    </>
  );
};

export default App;
