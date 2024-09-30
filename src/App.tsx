import colors from './colors.json';

const ColorsGreeting = ({ name, hex, comp }) => {
    return (
        <div>
            <h1 style={{ color: `#${hex}`, padding: '2em 2em 0em 2em', fontSize: '2em', display: 'flex', justifyContent: 'center' }}>Hello human, I am {name}.</h1>
            <p style={{ color: 'white', fontSize: '1.2em', display: 'flex', justifyContent: 'center' }}>My best friends are:</p>
            <ul style={{ color: `#${hex}`, fontSize: '1.2em', display: 'flex', justifyContent: 'center' }}>
                {comp.map(color => (
                    <li key={color.name} style={{ color: `#${color.hex}`, marginRight: '1em' }}>
                        {color.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const App = () => {
    return (
        <div>
            {colors.map(color => (
                <ColorsGreeting key={color.name} name={color.name} hex={color.hex} comp={color.comp} />
            ))}
        </div>
    );
};

export default App;
