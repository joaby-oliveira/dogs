import React from 'react'

const PhotoGet = () => {
    function handleSubmit(event) {
        event.preventDefault();

        fetch('https://dogsapi.origamid.dev/json/api/photo')
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            console.log(json);
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button>Procurar fotos</button>
            </form>
        </div>
    )
}

export default PhotoGet
