import React from 'react';


interface GreetingProps {
  name: string; // la prop "name" est une chaîne de caractères
}


const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
