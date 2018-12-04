import { Component } from "react";

import Nav from "./Nav";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
        <style jsx global>{``}</style>
      </div>
    );
  }
}
