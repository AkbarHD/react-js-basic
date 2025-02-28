export default function HelloWorld(){
    const props = {
        text: "Hello dari spread syntax"
    }
    return(
        <div>
            {/* <HeaderHelloWorld text={props.text}/> */}
            <HeaderHelloWorld {...props} />
            <ParagraphHelloWorld />
        </div>
    )
}

function HeaderHelloWorld({text = "Ups, anda tidak memasukkan text"}){
    // const text = "Hello World";
    return(
        <div>
            <h1 style={{ 
                color: "red",
                fontSize: "20px",
                backgroundColor: "aqua"
             }}>{text.toUpperCase()}</h1>
        </div>
    )
}

function ParagraphHelloWorld(){
    const text = "Aku Suka React JS";
    const style = {
        color: "blue",
        fontSize: "20px",
        backgroundColor: "yellow"
    }
    return(
        <div>
            <p style={style}>{text.toLowerCase()}</p>
        </div>
    )
}