const Person = (props) => {
    const person = props.age >= 18 ? "please go vote!" : "you must be 18";
    
    
    const hobbies = props.hobbies.map(h => <li>{h}</li>)
    return (
        <div>
        <p>Learn some information about this person.</p>
        <h3>{props.name.slice(0,6)} {person}</h3>
        <ul>
            {hobbies}
        </ul>
        </div>
    )
}