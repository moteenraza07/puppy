//2. import useState
import {useState} from 'react';




const FilteredForm = ({handleSubmit}) => {
    
    //2A. initialize state to keep track of the user's dropdown selection
    const [userSelection , setUserSelection ] = useState('placeholder');


    //2C. define a handleChange function
    const handleChange = (event) => {
        //2D. update state to be equal to the user's chosen pic orientation option
        setUserSelection(event.target.value);
    }

    
    return (
        //C. define a submit event listener and call the event handler which has been passed down via props
            // pass it the userSelection stae as an argument
        <form action="" onSubmit={(event) => {handleSubmit(event, userSelection)}}>
            <label htmlFor="filtration">Show me some photos of the following orientation</label>
            {/*in order to associate a label with an input, use the for and id attribute */}
            {/* in order for REact to know what  */}

            {/*1. listen for the 'change' event within the dropdown */}
            <select name="filtration" id="filtration" onChange={handleChange} value = {userSelection}>
                {/*1A pass in an onChange event handler */}

                {/*2E. use the state for the dropdown to subsequently dictate the value of the element ( close the state loop - aka have the value of the dropdown be dictated by react)  */}
                <option value="placeholder" disabled>Pick a photo orientation</option>
                <option value="squarish">Square</option>
                <option value="landscape">landscape</option>
                <option value="portrait">portrait</option>
            </select>
            <button>Show me my photos!</button>
        </form>
    )
}

export default FilteredForm;