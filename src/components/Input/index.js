import React, { PropTypes as T } from 'react';
import pure from 'recompose/pure';

const Input = ({ type, name, id, placeholder, pattern, required, onChange, value }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        name={name}
        id={id}
        className="input-md round form-control"
        placeholder={placeholder}
        pattern={pattern}
        required={required ? true : false}
        onChange={e => onChange(e)}
        value={value}
      />
    </div>
  );
}

Input.propTypes = {
  type: T.string.isRequired,
  value: T.any.isRequired,
  name: T.string.isRequired,
  id: T.string.isRequired,
  placeholder: T.string.isRequired,
  onChange: T.func.isRequired,
  pattern: T.string,
  required: T.bool,
};

export default pure(Input);
