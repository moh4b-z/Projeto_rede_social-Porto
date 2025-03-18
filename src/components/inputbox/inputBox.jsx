import './InputBox.css'

function InputBox(props) {
    const placeholderP = props.placeholder 
     return (
        <div className="input-box">
            
            <input placeholder={placeholderP}/>
        </div>
     )
}

export default InputBox