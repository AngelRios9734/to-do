

function Buton({ children, className, handleclick }) {
    return (
        <button className={className}
            type='submit'
            onClick={handleclick}>
            {children}
        </button>
    )
}

export default Buton;