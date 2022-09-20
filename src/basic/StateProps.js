import React, { Component } from "react";
import Operan from "./Operan";

export default class StateProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: "Bakso",
      minuman: "Es Jeruk",
    };
  }

  //   gantiMakanan(makanan_baru) {
  //     this.setState({
  //       makanan: makanan_baru,
  //     });
  //   }

  gantiMakanan = (makanan_baru) => {
    this.setState({
      makanan: makanan_baru,
    });
  };

  gantiMinuman = (minuman_baru) => {
    this.setState({
      minuman: minuman_baru,
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>
        <button onClick={() => this.gantiMakanan("Soto")}>Ganti Makanan</button>
        <h2>{this.state.minuman}</h2>
        <button onClick={() => this.gantiMinuman("Jus Mangga")}>
          Ganti Minuman
        </button>
        <Operan
          makanan={this.state.makanan}
          gantiMakanan={this.gantiMakanan}
          minuman={this.state.minuman}
          gantiMinuman={this.gantiMinuman}
        />
      </div>
    );
  }
}
