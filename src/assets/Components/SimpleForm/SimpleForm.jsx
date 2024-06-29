const SimpleForm = () => {
  const handleSubmit = event => {
    event.preventDefault(); // prevent default site loading when form is submitted
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.phone.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" />
        <br />
        <input type="email" name="email" placeholder="Enter your email" />
        <br />
        <input type="number" name="phone" placeholder="Enter your phone number" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;