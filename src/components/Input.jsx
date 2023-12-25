function Input(props) {
  return (
    <div className={props.input_cls}>
      <label>{props.input_label}</label>
      <input
        type={props.input_type}
        placeholder={props.input_placeholder}
        value={props.input_value}
      />
    </div>
  );
}

export default Input;
