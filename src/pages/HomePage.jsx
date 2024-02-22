import SearchBar from '../components/SearchBar';
import '../styles/SearchBar.scss';

const Homepage = () => {
    return (
        <div className="main-content">
            <SearchBar/>
            <i className="fas fa-search"></i>
        </div>
    );
}

export default Homepage;
