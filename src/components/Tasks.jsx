import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { handleDelete, handleCheck } from "../logic.js/item";
import Buton from "./Buton";

function Tasks({ task, setTask, setHasTask }) {
    return (
        <>
        { task  && (
            <ul className='task-list'>
                {
                    task.map((el) => (
                        <li className={`task-item ${el.done ? 'done' : ''}`} key={el.id}>
                            <span className='new-task'>{el.text}</span>
                           <Buton className={'buton-delete'} handleclick={() => handleDelete(el.id, task, setTask, setHasTask)} ><FaTrash size={15} color='black'/> </Buton>
                            <Buton className={`buton-check ${el.done ? 'update' : ''}`} handleclick={() => handleCheck(el.id, task, setTask)}><FaCheck /></Buton>
                        </li>
                    ))
                }
            </ul>
        )}
    </>
    )
}


export default Tasks;

