import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <a className="navbar-brand" to="#">Procareer Shoe Shop</a>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation"></button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className='nav-link active' to='/'>Home <span className="visually-hidden">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/products" aria-current="page">Products <span className="visually-hidden">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/about-us" aria-current="page">About Us <span className="visually-hidden">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/contactUs" aria-current="page">Contact Us<span className="visually-hidden">(current)</span></Link>
          </li> 
          <li className="nav-item">
            <Link className="nav-link active" to="/faqs" aria-current="page">FAQS<span className="visually-hidden">(current)</span></Link>
          </li>           
        </ul>
        <ul className="nav navbar-nav ms-auto">
        <li className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Login</a>
          <div className="dropdown-menu dropdown-menu-end">
            <Link to="#" className="dropdown-item">SignUp</Link>
            <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
              Login
            </button>
          </div>
        </li>
      </ul>
      </div>
    </nav>
    <div className="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">Login</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form action="">
                  <div className="mb-3">
                    <label for="" className="form-label">Username</label>
                    <input type="text" name="" id="" className="form-control" placeholder="Username" aria-describedby="helpId"/>
                  </div>
                  <div className="mb-3">
                    <label for="" className="form-label">Password</label>
                    <input type="password" className="form-control" name="" id="" placeholder="Password"/>
                  </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save</button>
            </div>
        </div>
    </div>
  </div>

</>
  );
}
 
export default Navbar;