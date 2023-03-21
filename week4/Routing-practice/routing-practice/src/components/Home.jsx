import {Link} from 'react-router-dom'


const Home = (props) => { 
    return (
    <div>
        <h1 style={{color: "red"}}>
        Welcome Coding Dojo Folk!
        </h1>
        <Link to={"/Word/:word"}>Go here to pick a word.</Link>
        <br/>
        <Link to={"/Number/:number"}>Go here to pick a Number</Link>
        <br/>
        <Link to={"/ColorWord/:word/:color/:background"}>Go here to pick a word with some color!</Link>
    </div>
    );
}

export default Home;