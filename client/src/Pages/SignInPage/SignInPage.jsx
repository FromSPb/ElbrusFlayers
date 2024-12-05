import AuthForm from '../../Features/auth/ui/AuthForm/AuthFornV2';

export default function SignInPage({ setUser }) {
  return <AuthForm type='signin' setUser={setUser} />;
}
