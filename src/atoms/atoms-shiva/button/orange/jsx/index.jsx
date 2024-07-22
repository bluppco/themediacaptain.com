const ButtonOrange = ( props ) => {

    return (

        <button className="bg-orange-500 hover:bg-cyan-700 duration-300 lg:text-xl text-white font-geomanist_book lg:px-10 lg:py-4 px-2 py-2">
            { props.children }
        </button>
        
    )
    
}
export default ButtonOrange
