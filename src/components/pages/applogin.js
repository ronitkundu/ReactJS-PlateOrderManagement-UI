import React, { useContext, useEffect, useState } from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import logos from '../images/logo.png'
import { Row, Col, Form } from 'react-bootstrap'
import AuthContext from '../context/auth-context';
import { useNavigate } from 'react-router-dom';
import { getLoginData } from '../common/handleResponse';
import { loginurl } from '../common/api'

const LoginPage = () => {
  const [openModal, setOpenModal] = useState(true);
  const [state, setState] = useState({ userName: "", password: "", invalidUser: false, invalidPassword: false, loginSuccessmessage: "", successModal: false ,loginFailuremessage:""});
  const navigate = useNavigate();
  useEffect(() => {
    setOpenModal(true)
  }, []);
  const ctx = useContext(AuthContext);
  const handleClose = () => {
    setOpenModal(false)
  }
  const fieldValueSet = (fieldname, value) => {
    if (fieldname === "userName") {
      state.userName = value
      state.invalidUser = ""
      setState({ ...state })
    }
    if (fieldname === "password") {
      state.password = value
      state.invalidPassword = ""
      setState({ ...state })
    }
  }
  const handleLogout = () => {

    handleClose();
    navigate('/')
    //return <Link to='/'></Link>
  }

  const logInSuccess = () => {
    const invalidUser = state.userName === "";
    const invalidPassword = state.password === "";
    if (invalidUser || invalidPassword) {
      state.invalidUser = invalidUser;
      state.invalidPassword = invalidPassword;
      setState({ ...state })
    } else {
      const res = getLoginData(loginurl, state.userName, state.password);
      res.then((result) => {
        if (result.status === 200) {
          ctx.onlogin(state.userName);
          handleClose();
          state.loginSuccessmessage = "Login Successful";
          state.successModal = true;
          setState({ ...state })
          setTimeout(() => {
            state.successModal = false;
            setState({ ...state })
            navigate('/')
          }, 500);
           
        }
        else {
          state.invalidUser = invalidUser;
          state.invalidPassword = invalidPassword;
          state.loginFailuremessage="Invalid Login Details"
          
          setState({ ...state })
        }
      })


      /* fetch("http://localhost:8080/plate/authenticate",{method: 'POST',headers: {
         'X-Auth': 'MTIzNA==',
         'Content-Type': 'application/json'
       },
       body:JSON.stringify({"userName": "Shreya Kundu"})})
       // .then(res => res.json())
       .then(res =>console.log(res))*/

    }


  }
  return (

    <>
      <Dialog open={openModal} >
        <img src={logos} alt={logos} />
        <DialogTitle>
          Greetings from Hungry Plate Co
      </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Login
        </DialogContentText>

          <Form onSubmit={handleClose}>

            <Row>
              <Col><Form.Label>User Name</Form.Label></Col>
              <Col><Form.Control type="text" value={state.userName} id={1} onChange={(e, value) => { fieldValueSet("userName", e.target.value) }}></Form.Control></Col>
              {state.invalidUser && <span style={{ color: 'red' }}>{'*Invalid UserName'}</span>}
            </Row>
            <br />
            <Row>
              <Col><Form.Label>Password</Form.Label></Col>
              <Col><Form.Control type="text" value={state.password} id={2} onChange={(e, value) => { fieldValueSet("password", e.target.value) }}></Form.Control></Col>
              {state.invalidPassword && <span style={{ color: 'red' }}>{'*Invalid Password'}</span>}
            </Row>
            <DialogActions>
              <Button onClick={handleLogout} color="primary">
                Close
            </Button>
              <Button onClick={logInSuccess} color="primary" >
                Submit
            </Button>
            </DialogActions>
          </Form>
        </DialogContent>

      </Dialog>
      <Dialog open={state.successModal} >
      <DialogTitle>
         {state.loginSuccessmessage}
      </DialogTitle>
        </Dialog>
    </>
  )
}

export default LoginPage;