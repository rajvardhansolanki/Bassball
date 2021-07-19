
import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius:'6px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Navbar = () => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top" id="Navbar">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/Home">Company Logo</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" to="/">HOME</NavLink>
              </li>

              <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" to="/Howwework">HOW WE WORK</NavLink>
              </li>

              <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" to="/Customers">CUSTOMERS</NavLink>
              </li>

              <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" to="/Services">SERVICES</NavLink>
              </li>


              <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" to="/Blog">BLOG</NavLink>
              </li>

              <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" to="/Review">REVIEWS</NavLink>
              </li>

              <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" to="/Aboutus">ABOUT US</NavLink>
              </li>

              <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" to="/Contactus">CONTACT US</NavLink>
              </li>

            </ul>

            <button className="btn btn-outline-light" type="button" onClick={handleOpen}>Talk to expert</button>

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <h2 id="transition-modal-title">It technology</h2>
                  <p id="transition-modal-description">Contact Number : 9696969696</p>
                </div>
              </Fade>
            </Modal>

          </div>
        </div>
      </nav>


    </>
  );
};
export default Navbar;