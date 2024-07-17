import React from 'react'
const ButtonDark = ({ button_text }) => {
    return (
        <button className="lg:px-10 lg:py-4 px-2 py-2 bg-slate-900 hover:bg-orange-500 duration-300 lg:text-xl font-geomanist_book text-white">
            { button_text }
        </button>
    )
}
export default ButtonDark
