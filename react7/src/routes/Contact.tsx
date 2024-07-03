import { Link } from "react-router-dom"
const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>

      <button><Link to="/contact/1">Contato 1</Link></button>
      <button><Link to="/contact/2">Contato 2</Link></button>
      <button><Link to="/contact/3">Contato 3</Link></button>
    </div>
  )
}

export default Contact