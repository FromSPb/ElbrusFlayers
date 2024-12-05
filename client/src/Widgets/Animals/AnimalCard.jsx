import React, { useState } from 'react';
//name, type, description
function AnimalCard({animal}) {

    const [faf , setFaf] = useState(false)

    const click = async () => {
        setFaf((prev) => !prev)

    }

    return (
        <>

            {animal.name}
            {animal.type}
            <button onClick={click}>изменить</button>
            {faf===true &&(
                <h1>1</h1>
            )}
        </>
    );
}

export default AnimalCard;