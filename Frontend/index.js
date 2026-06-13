function sum() {
    let a = 2;
    let sum = 50;
    for (let i = 0; i < sum; i++) {
        a += i;
    }
    console.log(a);
}
sum();
function counter() {
    let count = 0;
    return (
        <>
            <button onClick={() => count++}>Increment</button>
            <p>{count}</p>.,
        </>
    )
}