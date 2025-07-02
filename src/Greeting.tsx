import React from 'react';

// 1️⃣ Interface pour typer les props du composant
interface GreetingProps {
  name: string; // la prop "name" est une chaîne de caractères
}

// 2️⃣ Composant fonctionnel typé avec React.FC
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
