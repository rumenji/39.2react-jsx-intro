const App = () => {
    return (
        <div>
        <Tweet name="John" username="john87" tweet="This is my first tweet" date="01/23/24" />
        <Tweet name="John" username="john87" tweet="This is my second tweet" date="01/23/24" />
        <Tweet name="John" username="john87" tweet="This is my third tweet" date="01/23/24" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));