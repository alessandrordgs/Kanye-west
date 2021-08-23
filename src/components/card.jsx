export function Card(props){
  return (
    <div>
       <div>
          <h1>{props.name}</h1>
          <p>{props.population}</p>
          <p>{props.orbital_period}</p>
       </div>


    </div>
  )
}