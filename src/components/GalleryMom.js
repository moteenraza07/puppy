import FilteredForm from './FilteredForm';
import LilGallery from './LilGallery';

//1. import the useState and useEffect hooks from the react library
import {useState, useEffect} from 'react';

//2. import axios
import axios from 'axios';

const GalleryMom = () => {

      //3. initialize state to hold the data - AKA pictures - returned from the Unsplash API
      const [ puppyPics, setPuppyPics ] = useState([]);

      //3D. initialize another piece of state to represnet the photo orientation (which the use has chosen within the form dropdown)
      const [photoOrientation ,setPhotoOrientation ] = useState(null);

    
        //4. define a side effect which will run ONCE on component mount to make a request to the Unsplash for 
        // some puppy pics
        useEffect(() => {

            

            axios 
            ({
                baseURL: 'https://api.unsplash.com/search/photos',
                params: {
                query: 'puppies',
                per_page: 50,
                
                client_id: '_M_LR5rv10NHlDsfDs8k2LzkzWIs-8Us1wYSHo-mqEg',
                // d1. pass in the state variable so that this parameter's value is tied to state
                orientation: photoOrientation
                }

            }).then((apiData)=> {
                console.log(apiData);

                // once you async aPI request resolves successfully, we will save the returned data in state
                setPuppyPics(apiData.data.results);
            })

            // E. in order to ensure that this side effect runs everytime the user chooses a new photo orientation(submits the form with thier choice), just pass that
            // state value into the dependency array
                // i.e we are defining what the execution of this side effect is dependent on 

        }, [photoOrientation])

        const selectPhotoOrientation = (event, chosenOrientation) => {
            event.preventDefault();
            console.log(chosenOrientation);

            // call the state updater function and use the selected option value to update 
            setPhotoOrientation(chosenOrientation);
        } 
    return (
      
        <section>
            <FilteredForm handleSubmit={selectPhotoOrientation}/>
            {/*5. pass down the photos in state to LilGallery as props */}
            <LilGallery puppyArray={puppyPics} />
        </section>

    )
}

export default GalleryMom;