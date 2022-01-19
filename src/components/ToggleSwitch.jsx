const ToggleSwitch = (props) => {
  return (
    <div className="flex flex-row space-x-3">
      <label htmlFor="toggle">{props.text}</label>
      <input
        name={props.name}
        type="checkbox"
        className="toggle toggle-accent transition-all ease-in-out duration-200 checked:bg-green-500"
      />
    </div>
  );
};

export default ToggleSwitch;
