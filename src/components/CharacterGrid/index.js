import React from 'react'
import './styles.css'

const CharacterGrid = ({items, isLoading}) => {
    return isLoading ? (
        <h1>Loading...</h1> 
    ) : (
            <section className="cards">
                {items.map((item) => (
                    <h1 key={item.char_id}>{item.name}</h1>
                ))}

            </section>
        )
    
}

export default CharacterGrid