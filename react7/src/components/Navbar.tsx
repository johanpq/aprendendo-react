import { Link } from "react-router-dom" // O hook Link é igual a uma tag âncora em HTML, o to é igual ao href

const Navbar = () => {
  return (
    <nav>
        <button>
            <Link to="/">Home</Link> 
        </button>

        <button>
            <Link to="/contact">Contact</Link> 
        </button>
    </nav>
  )
}

export default Navbar