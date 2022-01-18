const ToggleSwitch = (props) => {
  return (
    <div className="flex flex-row space-x-3">
      <label htmlFor="toggle">{props.text}</label>
      <input
        name={props.name}
        type="checkbox"
        className="toggle toggle-accent checked:bg-green-500"
      />
    </div>
  );
};

export default ToggleSwitch;
