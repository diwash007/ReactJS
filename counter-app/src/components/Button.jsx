const Button = (props) => {
  return (
    <input type='button'
      onClick={props.onclick}
      value={props.value}
      className="button"
      />
  )
}

export default Button;