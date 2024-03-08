//React importiert für Libary und unser Hook useState
//das css von bootstrap für die Stylung des Formularfeldes
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Unsere State Variabeln 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  //Unsere Validierungsfunktion
  const validateForm = () => {
    //leeres objekt newErrors dient dazu Fehlermeldungen zu sammeln
    const newErrors = {};
    //Wenn nichts eingegeben wurde: 'E-Mail ist erforderlich'    
    if (!email) {
      newErrors.email = 'E-Mail ist erforderlich';
    }   
    //das in der Klammer ein Regex ausdruck, überprüft ob es ein @ hat und mindestens einen punkt nach dem @
    //wenn nicht, wird die email als ungültig ausgegeben
    else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'E-Mail ist ungültig';
    }
    //Wenn nichts beim passwort geschrieben wurde 'Passwort ist erforderlich' 
    if (!password) {
      newErrors.password = 'Passwort ist erforderlich';
    } 
    //Wenn die password länge kleiner als 6 ist : neuer text 'Passwort muss mindestens 6 Zeichen lang sein'
    else if (password.length < 6) {
      newErrors.password = 'Passwort muss mindestens 6 Zeichen lang sein';
    }
    //new Errors wird vewendet um den Zustand errors zu verändern
    setErrors(newErrors);
    
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Anmeldung erfolgreich', { email, password });
      // Logik zur Authentifizierung hinzufügen
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-Mail:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Passwort:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Anmelden</button>
    </form>
  );
}

export default App;

