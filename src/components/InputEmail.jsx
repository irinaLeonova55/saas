function InputEmail({ value, className, onChange }) {
  return (
    <input
      type="email"
      value={value}
      placeholder="Enter your email"
      className={className}
      onChange={onChange}
      required
    />
  );
}

export default InputEmail;
