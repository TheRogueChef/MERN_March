import {Link, useParams} from 'react-router-dom';

const Number = (props) => {
    const { number } = useParams();
    return (
    <div>
        <h1 style={{color: "green"}}>
        Your number is: {number}
        </h1>
        <Link to={'/'}>Go Home</Link>
    </div>
    );
}

export default Number;