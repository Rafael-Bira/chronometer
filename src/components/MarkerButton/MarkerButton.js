import './MarkerButton.css';

const MarkerButton = ({ addMarker }) => {
    return (
        <button className="addMarker" onClick={addMarker} >
            <i class="material-icons">push_pin</i>
            <br />
            Add marker
        </button>
    );
}

export default MarkerButton;