import React from 'react'
const ButtonOrange = ({ button_text }) => {
    return (
        <button className="lg:px-10 lg:py-4 px-2 py-2 bg-orange-500 hover:bg-cyan-700 duration-300 lg:text-xl font-geomanist_book text-white">
            { button_text }
        </button>
    )
}
export default ButtonOrange
