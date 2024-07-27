const Button = (props) => {
  const { children, classname = "bg-black" } = props;
  return (
    <Button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type="submit"
    >
      {children}
    </Button>
  );
};
export default Button;
