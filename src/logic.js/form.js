import { v4 as uuidv4 } from 'uuid'

export const handleInput = (event, updateSearch) => {
    updateSearch(event.target.value)
}

export const handleSubmit = (event, search, updateSearch, task, setTask) => {
    event.preventDefault()
    const newTask = {
        id: uuidv4(),
        text: search,
        done: false
    };

    if (search === '') {
        alert('You have not entered any tasks')
    } else {
        updateSearch('')
        setTask([...task, newTask])
    }

}




