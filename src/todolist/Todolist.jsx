import Todo from './Todo.jsx';

export default function Todolist(){
    const data = [
        {
            id: 0,
            text: "Belajar React",
            isComplete: true
        },
        {
            id: 1,
            text: "Belajar vue",
            isComplete: true
        },
        {
            id: 2,
            text: "Belajar Angular",
            isComplete: true
        },
        {
            id: 3,
            text: "Belajar Laravel",
            isComplete: false
        }
    ]

  
    return(
        // <ul>
        //     <Todo text="Belajar React" isComplete={true} isDeleted={true} />  {/* akan hilang jika isdeleted true */}
        //     <Todo text="Belajar vue" isComplete={true} />
        //     <Todo text="Belajar Angular" isComplete={true} />
        //     <Todo text="Belajar Laravel" isComplete={false} />
        // </ul>

        // <ul>
        //     {todos}
        // </ul>

        <ul>
            {/* kurung kurawal */}
            {data.map((todo) => {
                return <Todo key={todo.id} {...todo} />
            })}

            {/* tanda kurubg */}

            {/* {data.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))} */}
            
        </ul>
    )
}