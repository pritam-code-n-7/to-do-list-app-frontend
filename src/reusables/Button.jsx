/* eslint-disable react/prop-types */

const Button = ({ name, type, className, onClick }) => {
  return (
    <div>
      <button type={type} className={className} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
