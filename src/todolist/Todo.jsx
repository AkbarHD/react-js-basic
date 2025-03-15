export default function Todo({text, isComplete, isDeleted=false}){
    if(isDeleted){
        return null
    }else{
        return (
            // <li>{isComplete ? "✅" : "❌"} {text}</li>
            <li> {text} {isComplete && "✅"}</li> // ternary &&
        )
    }
}