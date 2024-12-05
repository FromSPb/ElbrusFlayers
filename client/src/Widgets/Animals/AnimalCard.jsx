import React from 'react';
//name, type, description
function AnimalCard({animal}) {
    return (
        <>
            
            {animal.name}
            {animal.type}
        </>
    );
}

export default AnimalCard;