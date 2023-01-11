

//passed down via props within the component function parameter.

const Photo = ({getTheBits}) => {
    return (
        <li className="photo-container">
            <img src= {getTheBits.urls.full} alt={getTheBits.alt_description}/>
        </li>
    )
}

export default Photo;