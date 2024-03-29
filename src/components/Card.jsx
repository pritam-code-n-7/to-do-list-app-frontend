/* eslint-disable react/prop-types */

function Card(props) {
  return (
    <div className=" gap-2 border border-black h-auto  justify-center p-2 relative m-auto">
      <h1 className="border-b border-black">{props.id}</h1>
      <p>{props.title}</p>
    </div>
  );
}

export default Card;
