const ButtonRoundedFull = ( props ) => {

    return (

        <button className="flex items-center justify-center bg-black size-14 text-white text-2xl bg-opacity-50 p-2 rounded-full" onClick={ props.click_event }>
            { props.children }
        </button>

    )

}
export default ButtonRoundedFull
