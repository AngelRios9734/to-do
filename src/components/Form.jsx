import { IoIosAdd } from "react-icons/io";
import { useState } from "react";
import { handleSubmit, handleInput } from "../logic.js/form";
import Buton from "./Buton";

function Form({ setTask, task }) {
    const [search, updateSearch] = useState('')

    return (
        <form className='form' onSubmit={(event) => handleSubmit(event, search, updateSearch, task, setTask)}>
            <input
                className='input-search'
                type='text'
                placeholder='Have breakfast, study, work etc...'
                onChange={(event) => handleInput(event, updateSearch)}
                value={search} />
            <Buton className={'buton-search'}><IoIosAdd size={30} /></Buton>
        </form>
    )
}

export default Form;
