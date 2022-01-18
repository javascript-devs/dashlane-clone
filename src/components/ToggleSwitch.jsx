const ToggleSwitch = (props) => {
  return (
    <div className="p-6 card bordered">
      <div className="form-control">
        <label className="cursor-pointer label space-x-3">
          <span className="label-text text-xl">{props.text}</span>
          <input
            name={props.name}
            type="checkbox"
            className="toggle toggle-accent checked:bg-green-500"
          />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
