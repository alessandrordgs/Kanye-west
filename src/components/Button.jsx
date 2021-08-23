export function Button (props) {
  return (
    <button onClick={props.onClick}>
      {props.name} 
      <p>{props.text}</p>
    </button>  
  )
}