const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="John" />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));