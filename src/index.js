import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import AppRouter from "./AppRouter/AppRouter";
import withStorage from "./Hoc/withStorage";
import { setLogin } from "./actions/login";
import "bulma/css/bulma.css";
import "bulma-extensions/dist/css/bulma-extensions.min.css";

const store = configureStore();

console.log(store.getState());

class App extends React.Component {
  componentDidMount() {
    store.dispatch(setLogin(JSON.parse(this.props.load("isAuthenticated"))));
  }
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

const RootComponent = withStorage(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<RootComponent />, rootElement);
