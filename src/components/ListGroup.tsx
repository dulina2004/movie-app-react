let items = ["new york", "los angeles", "chicago", "houston", "phoenix"];
items = items.sort();
function ListGroup() {
    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No items to display</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className="list-group-item"
                        key={item}
                        onClick={() => {
                            console.log(item, index);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
