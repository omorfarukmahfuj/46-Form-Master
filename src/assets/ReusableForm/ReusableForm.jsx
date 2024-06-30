import PropTypes from "prop-types";

const ReusableForm = ({ formTitle, handleSubmit, submitBtnText = 'Submit', children }) => {

  const handleLocalSubmit = event => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.password.value,
    }

    handleSubmit(data);
  }
  return (
    <div>
      {children}
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" placeholder="Enter your name" />
        <br />
        <input type="email" name="email" placeholder="Enter your email" />
        <br />
        <input type="password" name="password" placeholder="Enter your password" />
        <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

ReusableForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitBtnText: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default ReusableForm;