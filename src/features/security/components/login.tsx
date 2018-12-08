import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Redirect } from 'react-router';
import { AppConstants } from '../../../constants';
import { AuthStore } from '../stores/auth-store';

const styles = createStyles({
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    card: {
        minWidth: 275,
    },
    pos: {
        marginBottom: 12,
    },
    title: {
        fontSize: 14,
        marginBottom: 16
    }
});

export interface ILoginProps extends WithStyles<typeof styles> {
    authStore?: AuthStore;
}


@inject('authStore')
@observer
class Login extends React.Component<ILoginProps> {

    public handleLogin() {
        this.props.authStore!.handleLogin();
    }

    public handleUserName = (e: any) => {
        this.props.authStore!.userName = e.currentTarget.value;
    }

    public handlePassword = (e: any) => {
        this.props.authStore!.password = e.currentTarget.value;
    }

    public render() {

        const { classes, authStore } = this.props;
        const { userName, password } = authStore!;
        const handleLogin = () => this.handleLogin();
        
        if (authStore!.isAuthenticated) {
            return <Redirect to={AppConstants.CLIENT_URLS.NEIGHBOURHOOD_SIMULATION}/>
        }
        
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary">
                            Login
                        </Typography>
                        <TextField
                            id="name"
                            label="User Name"
                            margin="normal"
                            value={userName}
                            onChange={this.handleUserName}
                        />
                        <div/>
                        <TextField
                            id="password"
                            type="password"
                            label="Password"
                            margin="normal"
                            value={password}
                            onChange={this.handlePassword}
                        />
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleLogin} variant="contained" color="primary">Login</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(Login);