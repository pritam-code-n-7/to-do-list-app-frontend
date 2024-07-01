/* eslint-disable react/prop-types */
const InputField = ({
  className,
  type,
  arialabel,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div>
      <input
        className={className}
        type={type}
        aria-label={arialabel}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
