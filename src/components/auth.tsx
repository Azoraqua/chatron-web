// @ts-expect-error - No types for this.
const Auth = ({ children }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1>Auth</h1>
      {children}
    </div>
  );
}
Auth.displayName = 'Auth';

const Register: FC = () => {
  return (
    <div>
      <h1>Register</h1>
    </div>
  );
}
Register.displayName = 'Register';

const Login: FC = () => {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}
Login.displayName = 'Login';

Auth.Register = Register;
Auth.Login = Login;

export default Auth;