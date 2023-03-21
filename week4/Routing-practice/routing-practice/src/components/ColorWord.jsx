import {useParams, Link} from 'react-router-dom'

const ColorWord = (props) => {
    const { word, color, background } = useParams();
    return (
    <div>
        <h1 style={{color: color, backgroundColor: background}}>
        Your word with colors is: {word}, {color}, {background}
        </h1>
        <Link to={'/'}>Go Home</Link>
    </div>
    );
}

export default ColorWord;