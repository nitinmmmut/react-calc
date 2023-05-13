
const Input = ({num, placeholder}) => {

    return (
        <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
            num(e.target.value);
        }} // setNum = num
         />

    )
}

export default Input;