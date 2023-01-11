import Photo from './Photo';
// destructure the picture data passed down via props within the component function parameter.
const LilGallery = ({puppyArray}) => {
    
    return (
        <div>
            <h2>Here are your puppy pictures:</h2>
            <ul className="photos">
                {
                    // map through the puppyArray and generate a photo component for each object within that array

                        // we will pass the entire object to the photo component via props

                        puppyArray.map((photoObject) => {
                            return <Photo key= {photoObject.id}getTheBits= {photoObject} />
                        })
                }

            </ul>

        </div>
    )
}

export default LilGallery;