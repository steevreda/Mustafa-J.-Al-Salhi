
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ImageLogin from '../Images/loginImage.jpg'
import { NotificationManager } from 'react-notifications';
import { Redirect } from 'react-router';


class Login extends React.Component {
    initialState = {
        email: '',
        password: '',
        validatingLoginBTN: false
    }

    constructor(props) {
        super(props)
        this.state = this.initialState;
    }

    onDataChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    validatingLoginBTN = () => {
        if (this.state.email === '' || this.state.password === '') {
            NotificationManager.warning('Fill in all fields', 'Warning', 3000);
        }
        if (this.state.email === 'admin@admin.com' && this.state.password === '123456') {
            this.setState({ validatingLoginBTN: true })
            // Redirect.arguments('/home')
            return (
                <Redirect to='/home' />
            )
        } else {
            NotificationManager.warning('Email or Password incoreect', 'Warning', 3000);
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.validatingLoginBTN ? <Redirect to='/home' /> :
                        <Grid container component="main" style={useStyles.root}>
                            <CssBaseline />
                            <Grid item xs={false} sm={4} md={7} style={useStyles.image} />
                            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                                <div style={useStyles.paper}>
                                    <Avatar style={useStyles.avatar}>
                                        <LockOutlinedIcon />
                                    </Avatar>
                                    <Typography component="h1" variant="h5">
                                        Welocome Back
            </Typography>
                                    <form className={useStyles.form} noValidate>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onDataChange}
                                            autoComplete="email"
                                            autoFocus
                                        />
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            value={this.state.password}
                                            onChange={this.onDataChange}
                                            autoComplete="current-password"
                                        />

                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            style={{ backgroundColor: '#48d3e1', color: '#ffffff' }}
                                            className={classes.submit}
                                            onClick={() => this.validatingLoginBTN()}
                                        >
                                            Login
              </Button>
                                        <Grid container>
                                            <Grid item xs>
                                                <Link href="#" variant="body2">
                                                    Forgot password?
                  </Link>
                                            </Grid>

                                        </Grid>
                                    </form>
                                </div>
                            </Grid>

                        </Grid>
                }
            </div>
        );
    }

}
const useStyles = {
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${ImageLogin})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        backgroundColor: '#48d3e1',
        margin: '30px',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: '30px',
    },
    submit: {
        margin: '30px',
    },
};
const classes = useStyles;

export default Login;
