function User(props) {
    return (
        <>
            <h2 style={{ background: props.color }}>Hello, {props.firstName}!</h2>
            <hr></hr>
        </>
    )
}

export default User;