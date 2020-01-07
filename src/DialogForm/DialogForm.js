import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Header from '../Header/Header'
class DialogForm extends React.Component {

    /*
     * this Component work any place you want,
     * the State in this Class is dinamic 
    */

    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillReceiveProps(newProps) {
        this.props = newProps
    }
    // set text on state
    onChangeText = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        return (
            <div>
                <Dialog open={true} aria-labelledby="form-dialog-title"  onClose={() => this.props.closeDialogProps()}>
                    <DialogTitle id="form-dialog-title">This is Dialog Form</DialogTitle>
                    <DialogContent>
                        <DialogContentText>You can set any thing you want on it</DialogContentText>

                        <TextField
                            autoFocus
                            margin="dense"
                            type="text"
                            fullWidth
                            onChange={this.onChangeText}
                        />
                        <Header/>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick = {()=>{this.props.closeDialogProps()}}>Cancel</Button>
                        <Button  onClick = {()=>{this.props.closeDialogProps()}}>Done</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }

}
export default DialogForm