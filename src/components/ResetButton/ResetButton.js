import './ResetButton.css';

const ResetButton = ({ handleReset }) => {
    return (
        <button className="reset" onClick={handleReset}>
            <i class="material-icons">replay</i>
            <br />
            Reset
        </button>
    );
}

export default ResetButton;