
type Input = {
    type: "text" | "checkbox" | "color"
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({ type, inputValue, setInputValue }: Input) => {
    return (
        <input
            required
            value={inputValue} onChange={(e) => setInputValue(e.target.value)} type={type} className='w-full p-2 rounded-sm mb-2 text-black' placeholder="Add a task" />
    )
}

export default Input
