import AuthForm from '../../Features/auth/ui/AuthForm/AuthFornV2';

export default function SignUpPage({ setUser }) {
  return <AuthForm type='signup' setUser={setUser} />;
}
