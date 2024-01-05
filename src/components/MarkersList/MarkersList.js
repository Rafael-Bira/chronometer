import './MarkersList.css';

const MarkersList = ({ markers, displayTime, removeMarker }) => {
    return (
        <ol>
        {markers.map((marker, ind) => 
          <li key={ind}>
            {displayTime(marker)}
            <button className="remove" onClick={() => removeMarker(ind)}>Remove</button>
          </li>
        )}
      </ol>
    );
}

export default MarkersList;