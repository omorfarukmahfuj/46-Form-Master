import useInputState from "../../hooks/useInputState";

const HookForm = () => {
  // const [name, handleNameChange] = useInputState('Omor');
  const emailState = useInputState('mypcfaruk@gmail.com');

  const handleSubmit = event => {
    // console.log('form data', name);
    console.log('form data', emailState.value);
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="Enter your name" /> */}
        <br />
        <input {...emailState} type="email" name="email" placeholder="Enter your email" />
        <br />
        <input type="password" name="phone" placeholder="Enter your password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;