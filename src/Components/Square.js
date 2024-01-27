import '../Styles/Square.css';


function Square({ value, onClick, winner, index }) {
    const winningSquare = winner?.combination?.includes(index) ? 'winning-square' : "";

    return <button className={`square ${winningSquare}`} onClick={onClick}>
        {value === 'x' && <img src={process.env.PUBLIC_URL + "/image_x.png"} alt="x" className={`image-icon ${winningSquare}-image`} />}
        {value === 'o' && <img src={process.env.PUBLIC_URL + "/image_o.png"} alt="o" className={`image-icon ${winningSquare}-image`} />}
    </button>
}

export default Square;
