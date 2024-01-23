const App = () => {
    return (
        <div>
        <Person name="John" age={18} hobbies={["hiking", "swimming"]}/>
        <Person name="Don" age={17} hobbies={["bowling", "gym"]}/>
        <Person name="Maria" age={34} hobbies={["movies", "snorkeling"]}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))