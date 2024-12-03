
export default function Button(props) {
    return (
        <button {...props} 
        className={
            
            "bg-blue-500 py-1 px-4 rounded-md text-white" + 
            (props.primary ? 'bg-blue-500 text-white' : 'text-gray-600')}></button>
    )
}