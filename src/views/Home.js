import React from 'react';

function Home({
  onIncrement,
  counter,
}) {
  return (
    <div>
      <button>
        Vous avez cliqué {counter} fois
      </button>
    </div>
  );
};

export default Home;
