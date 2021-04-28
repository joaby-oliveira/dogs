import React from 'react'

const TokenPost = () => {
    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [token, setToken] = React.useState('')
    function handleSubmit (event) {
        event.preventDefault();
        console.log(userName, password);

        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userName,
                password
            })
        }).then((response)=>{
            console.log(response);
            return response.json();
        }).then((json)=>{
            setToken(json.token);
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
                    type="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)} placeholder="password"
                />

                <button>Enviar</button>
            </form>

            <p style={{wordBreak: 'break-all'}}>
                {token}
            </p>
        </div>
    )
}

export default TokenPost
