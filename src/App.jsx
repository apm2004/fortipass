import { useState } from 'react';
import './App.css';
import { calculateEntropy } from './utils/entropyCalculator';

function App() {
  const [password, setPassword] = useState('');
  const entropy = calculateEntropy(password);

  const getStrengthLabel = () => {
    if (entropy === 0) return 'Too Weak';
    if (entropy < 40) return 'Weak';
    if (entropy < 60) return 'Moderate';
    return 'Strong';
  };

  return (
    <div className="app">
      <h1>FortiPass 🔐</h1>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="results">
        <p><strong>Entropy:</strong> {entropy} bits</p>
        <p><strong>Strength:</strong> {getStrengthLabel()}</p>
      </div>
    </div>
  );
}

export default App;
