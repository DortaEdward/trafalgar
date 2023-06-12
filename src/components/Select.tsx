type Option = {
  value: string;
};

type Props = {
  name: string;
  values: Option[];
};

const Select = ({ values, name }: Props) => {
  return (
    <select name={name}>
      {values.map((value: any) => {
        return <option key={value ? `${value}` : ""} value={value}>{value}</option>;
      })}
    </select>
  );
};

export default Select;
