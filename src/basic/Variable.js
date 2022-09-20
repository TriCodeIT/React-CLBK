import React from "react";

//Const
// const harga = 3000;
// harga = 2000

//Var
// var harga = 20000
// if (true) {
//     var harga = 30000
// }

//let
let harga = 20000;
// harga = 30000
if (true) {
  let harga = 30000;
}

export const Variable = () => {
  return (
    <div>
      <h2>Harga : {harga}</h2>
    </div>
  );
};
