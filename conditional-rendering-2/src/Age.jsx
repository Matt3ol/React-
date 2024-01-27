export function Age({età}) {
    return (
        <>
        {età > 18 && <p>Your age is {età}</p>}
        {età <= 18 && <p>You are very young!</p>}
        </>
    )
    
}