import React from 'react'

const UserPost = () => {
    const [userName, setUserName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    function handleSubmit (event) {
        event.preventDefault();
        console.log(userName, email, password);

        fetch('https://dogsapi.origamid.dev/json/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userName,
                email,
                password
            })
        }).then((response)=>{
            console.log(response);
            return response.json();
        }).then((json)=>{
            console.log(json);
        })
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userName}
                    onChange={({ target }) => setUserName(target.value)} placeholder="username"
                />

                <input
                    type="email"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)} placeholder="email"
                />

                <input
                    type="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)} placeholder="password"
                />

                <button>Enviar</button>
            </form>
        </div>
    )
}

export default UserPost
