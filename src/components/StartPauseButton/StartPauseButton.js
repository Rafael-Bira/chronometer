import './StartPauseButton.css';

const StartButton = ({ handleStartPause, running }) => {
    return (
        <button className={running ? "pause" : "start"} onClick={handleStartPause}>
            <i class="material-icons">{running ? "pause": "play_arrow"}</i>
            <br />
            {running ? "Pause" : "Start"}
        </button>
    );
}

export default StartButton;