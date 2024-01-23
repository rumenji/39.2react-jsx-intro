const Tweet = (props) => {
    return (
        <div class="tweet">
            <p class="username">{props.username}</p>
            <h3 class="message">{props.tweet}</h3>
            <p class="name">{props.name}</p>
            <p class="date">{props.date}</p>
        </div>
    )
}