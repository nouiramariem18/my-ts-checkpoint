import React, { Component } from 'react';

// 1️⃣ Interface pour les props (vide ici)
interface CounterProps {}

// 2️⃣ Interface pour le state
interface CounterState {
  count: number;
}

// 3️⃣ Composant de classe avec typage des props et du state
class Counter extends Component<CounterProps, CounterState> {
  // 4️⃣ Initialisation du state avec le bon type
  state: CounterState = {
    count: 0,
  };

  // 5️⃣ Méthode pour incrémenter le compteur
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // 6️⃣ Méthode render correctement structurée
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
