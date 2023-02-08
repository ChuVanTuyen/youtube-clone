import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`search/${searchTerm}`);
        }
    }
    return (
        <form className="form-inline d-flex search-bar"
            onSubmit={(e) => { handleSubmit(e) }}>
            <input className="mr-sm-2" value={searchTerm} placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
            <button className="search-btn rounded-circle my-2 my-sm-0">
                <AiOutlineSearch />
            </button>
        </form>
    )
}

export default SearchBar