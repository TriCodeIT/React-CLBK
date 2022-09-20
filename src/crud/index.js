import React, { Component } from "react";
import Formulir from "./Formulir";
import NavbarComponent from "./NavbarComponent";
import Tabel from "./Tabel";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanans: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <Tabel />
          <Formulir />
        </div>
      </div>
    );
  }
}
