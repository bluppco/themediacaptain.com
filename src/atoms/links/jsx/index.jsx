const Link = ({ aria_label, href, children }) => {

    return (

        <a href={ href } aria-label={ aria_label } rel="noopener noreferrer">
            { children }
        </a>
        
    )
    
}
export default Link
