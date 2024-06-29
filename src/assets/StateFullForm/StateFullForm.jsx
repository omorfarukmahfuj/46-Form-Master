import { useState } from "react";

const StateFullForm = () => {
  const [name, setName] = useState("Omor Faruk Mahfuj");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = event => {
    event.preventDefault(); // prevent default site loading when form is submitted
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
    }
    else {
      setError('');
      console.log(name, email, password);
    }
  };

  const handleNameChange = event => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="Enter your name" />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" placeholder="Enter your email" />
        <br />
        <input onChange={handlePasswordChange} type="password" name="password" placeholder="Enter your password" required />
        <br />
        <input type="submit" value="Submit" />
        {
          error && <p style={{ color: 'red' }}>{error}</p>
        }
      </form>
    </div>
  );
};


export default StateFullForm;