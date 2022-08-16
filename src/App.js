import React, { Component } from "react";

export default class App extends Component {
  mensagem = () => {
    return <h2>Mensagem Importante</h2>;
  };

  multiplica = (x) => {
    return <h3>O dobro é: {2 * x}</h3>;
  };

  render() {
    return (
      <>
        <h1>Desafio Arrow Function</h1>
        {this.mensagem()}
        {this.multiplica(7)}
      </>
    );
  }
}

// Crie uma arrow function que receba uma mensagem e exiba na tela

// Crie uma arrow function que retorne o dobro de um número e exiba na tela
