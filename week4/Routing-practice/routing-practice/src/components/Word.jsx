import {Link, useParams} from 'react-router-dom'


const Word = (props) => {
    const { word } = useParams();
    return (
    <div>
        <h1 style={{color: "blue"}}>
        Your word is: {word}
        </h1>
        <Link to={'/'}>Go Home</Link>
    </div>
    );
}

export default Word;