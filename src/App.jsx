import './App.css'
// import SimpleForm from './assets/Components/SimpleForm/SimpleForm';
// import StateFullForm from './assets/StateFullForm/StateFullForm';
// import RefForm from './assets/RefForm/RefForm';
// import HookForm from './assets/HookForm/HookForm';
import ReusableForm from './assets/ReusableForm/ReusableForm';

function App() {

  const handleSignUpSubmit = data => {
    console.log('sign up data', data);
  }

  const handleUpdateProfile = data => {
    console.log('update profile', data);
  }

  return (
    <>
      <h1>Form Master</h1>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}

      <ReusableForm
        formTitle={'Sign Up'}
        handleSubmit={handleSignUpSubmit}
      >
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm >

      <ReusableForm
        formTitle={'Profile Update'}
        handleSubmit={handleUpdateProfile}
        submitBtnText={'Update'}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm>



    </>
  )
}

export default App
