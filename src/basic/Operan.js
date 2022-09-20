import React, { Component } from "react";

export default class Operan extends Component {
  //   gantiMakanan(makanan_baru) {
  //     this.setState({
  //       makanan: makanan_baru,
  //     });
  //   }

  gantiMinuman = (minuman_baru) => {
    this.setState({
      minuman: minuman_baru,
    });
  };

  render() {
    const { makanan, gantiMakanan, minuman, gantiMinuman } = this.props;

    return (
      <div>
        <h2>Operan State yang menjadi Props : {makanan}</h2>
        {/* <button onClick={() => this.gantiMakanan("Soto")}>Ganti Makanan</button> */}
        <button onClick={() => gantiMakanan("Soto")}>Ganti Makanan</button>
        <h2>Operan State yang menjadi Props : {minuman}</h2>
        <button onClick={() => gantiMinuman("Jus Jeruk")}>Ganti Minuman</button>
      </div>
    );
  }
}
