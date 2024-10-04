// App.jsx
import React from 'react';
import Button from './components/Button';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>My Application</h1>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
};

export default App;