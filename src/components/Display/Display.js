import './Display.css';
import img from './chronometer.png';

const Display = ({ displayTime, time }) => {
    return (
        <div className="display">
            <img src={img} alt="Chronometer" />
            <span id="timeDisplay">{displayTime(time)}</span>
        </div>
    );
}

export default Display;