


export const handleDelete = (id, task, setTask, setHasTask) => {
    const updateTask = task.filter(el => el.id !== id)
    setTask(updateTask)
    setHasTask(false)
}

export const handleCheck = (id, task, setTask) => {
    const updateTask = task.map(el => {
        if (el.id === id) {
            return {
                ...el,
                done: !el.done
            }
        }
        return el
    })
    setTask(updateTask)
}