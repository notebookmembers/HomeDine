import PropTypes from 'prop-types';

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

Input.propTypes = {
  input_cls: PropTypes.string.isRequired,
  input_label: PropTypes.string.isRequired,
  input_type: PropTypes.string.isRequired,
  input_placeholder: PropTypes.string.isRequired,
  input_value: PropTypes.string.isRequired,
};

export default Input;
