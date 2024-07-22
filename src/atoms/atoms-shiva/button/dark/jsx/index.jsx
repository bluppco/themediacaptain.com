const ButtonDark = ( props ) => {

    return (

        <button className="bg-slate-900 hover:bg-orange-500 duration-300 lg:text-xl text-white font-geomanist_book lg:px-10 lg:py-4 px-2 py-2">
            { props.children }
        </button>
        
    )
    
}
export default ButtonDark
