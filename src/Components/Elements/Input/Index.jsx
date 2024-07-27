import Label from "./Labels";
import Input from "./Input";
const Inputform = (props) => {
  const { label, name, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlfor={name}>Title</Label>
      <Input name={name} type={name} placeholder={place} />
    </div>
  );
};
export default Inputform;
