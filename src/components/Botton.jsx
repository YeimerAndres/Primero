import PropTypes from 'prop-types'

export function Button({text,name ="Some User" }) {
    
  console.log(text);
  return <button onClick={ function(){
    console.log("hola perru")
  }}>
    {text} - {name}
    </button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

/* Button.defaultProps ={
    name:"Some User"
} */