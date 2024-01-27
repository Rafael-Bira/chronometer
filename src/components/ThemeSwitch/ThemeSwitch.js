import './ThemeSwitch.css';

const ThemeSwitch = () => {
    return (
        <button className="theme-button" onClick={() => document.body.classList.toggle("dark-theme")}>
            <i class="material-icons">contrast</i>
        </button>
    );
}

export default ThemeSwitch;