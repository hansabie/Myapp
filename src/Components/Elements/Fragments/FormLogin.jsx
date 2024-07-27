import Button from "../Button";
import Inputform from "../Input/Index";

const FormLogin = (props) => {
  return (
    <form action="">
      <Inputform
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <Inputform
        label="Password"
        type="password"
        placeholder="*****"
        name="Password"
      />

      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};
export default FormLogin;
