import AuthForm from '../../Features/auth/ui/AuthForm/AuthFornV2';
// import styles from "./SignUpPage.";



export default function SignUpPage({ setUser }) {
  return (
    <>
    <div >
  <AuthForm type='signUp' setUser={setUser} />;
  </div>
  </>
  )
}
