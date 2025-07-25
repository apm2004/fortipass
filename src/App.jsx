import { useEffect, useState } from 'react';
import './App.css';
import { calculateEntropy } from './utils/entropyCalculator';
import { containsCommonWord } from './utils/checkCommonWords';
import { checkPasswordBreach } from './utils/checkBreach';
import { getSuggestions } from './utils/suggestions';


function App() {
  const [password, setPassword] = useState('');
  const [breachCount, setBreachCount] = useState(null);

  const entropy = calculateEntropy(password);
  const hasCommonWord = containsCommonWord(password);
  const suggestions = getSuggestions(password);


  useEffect(() => {
    const timeout = setTimeout(() => {
      if (password) {
        checkPasswordBreach(password).then(setBreachCount);
      } else {
        setBreachCount(null);
      }
    }, 500); // debounce to reduce API calls
    return () => clearTimeout(timeout);
  }, [password]);

  const getStrengthLabel = () => {
    if (entropy === 0) return 'Too Weak';
    if (entropy < 40) return 'Weak';
    if (entropy < 60) return 'Moderate';
    return 'Strong';
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-900 text-white flex items-center justify-center px-4" style={{ minHeight: '100vh', minWidth: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="max-w-xl w-full space-y-6 bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center" style={{ width: '100%', maxWidth: '32rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 className="text-4xl font-bold text-center text-white">
          FortiPass <span className="ml-2">🔐</span>
        </h1>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-4 mb-4 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ maxWidth: '100%' }}
        />

        <div className="results w-full flex flex-col items-center">
          <p><strong>Entropy:</strong> {entropy} bits</p>
          <p><strong>Strength:</strong> {getStrengthLabel()}</p>

          {hasCommonWord && (
            <p style={{ color: 'red' }}>
              ⚠️ Contains a common/weak word
            </p>
          )}

          {breachCount > 0 && (
            <p style={{ color: 'red' }}>
              🔥 This password has appeared in {breachCount.toLocaleString()} breaches!
            </p>
          )}

          {breachCount === 0 && password && (
            <p style={{ color: 'green' }}>
              ✅ This password hasn’t been found in known breaches
            </p>
          )}

          {breachCount === -1 && (
            <p style={{ color: 'orange' }}>
              ⚠️ Couldn’t check breach status. Please try again later.
            </p>
          )}

          {suggestions.length > 0 && (
            <div style={{ marginTop: '1rem' }}>
              <p><strong>Suggestions:</strong></p>
              <ul>
                {suggestions.map((s, idx) => (
                  <li key={idx}>✅ {s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
