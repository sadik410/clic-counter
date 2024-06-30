import React from 'react';

function Counter({ onIncrement, counter = 0, onDecrement }) {
  return (
    <div>
      <button onClick={onIncrement}>Vous avez cliqué {counter} fois</button>
      {/* Ajouter un bouton pour décrémenter le compteur */}
      <button onClick={onDecrement} disabled={counter <= 0}>
        Décrémenter
      </button>
    </div>
  );
}

export default Counter;
