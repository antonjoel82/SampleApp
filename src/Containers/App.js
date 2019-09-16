import React from 'react';
import ResourceGrid from '../Components/ResourceGrid/ResourceGrid';
import StickyBar from '../Components/StickyBar/StickyBar';
import { Route, Switch } from 'react-router-dom';
import { SourceType } from '../constants.js';
import SignIn from '../Components/SignIn/SignIn.js';
import Register from '../Components/Register/Register.js';
import PropsRoute from '../Components/PropsRoute/PropsRoute.js';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Upload from '../Components/Upload/Upload';
import DialogContainer from '../Components/DialogContainer/DialogContainer';
import { showDialog, hideDialog } from '../Actions/DialogAction.js';

const resources = [
  { id: 'sadas3r5234', title: 'Ian Sweeney for Callahan 2019', srcType: SourceType.VIDEO, src: 'https://www.youtube.com/embed/xlwL_vSsIPI' },
  { id: 'abc', src: 'https://www.youtube.com/embed/xlwL_vSsIPI', title: 'Ultimate Title Here' }, { id: 'abcd', src: 'https://www.youtube.com/embed/xlwL_vSsIPI', title: 'Ultimate Title Here' }, { id: 'abce', src: 'https://www.youtube.com/embed/xlwL_vSsIPI', title: 'Ultimate Title Here' },
  { id: 'abcf', src: 'https://www.youtube.com/embed/xlwL_vSsIPI', title: 'Ultimate Title Here' }, { id: 'abcg', src: 'https://www.youtube.com/embed/xlwL_vSsIPI', title: 'Ultimate Title Here' }, { id: 'abch', src: 'https://www.youtube.com/embed/xlwL_vSsIPI', title: 'Ultimate Title Here' },
  { id: 'abci', src: 'https://www.youtube.com/embed/xlwL_vSsIPI', title: 'Ultimate Title Here' }, { id: 'abcj', src: 'https://www.youtube.com/embed/xlwL_vSsIPI', title: 'Ultimate Title Here' }, { id: 'abck', src: 'https://www.youtube.com/embed/xlwL_vSsIPI', title: 'Ultimate Title Here' }
];

const mapStateToProps = (state) => {
  return {
    user: state.signIn.user,
    signedIn: state.signIn.signedIn,
    location: state.router.location
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showDialog: (dialogProps, dialogType) => dispatch(showDialog({ dialogProps, dialogType })),
    hideDialog: () => dispatch(hideDialog()),
    push
  };
};

class App extends React.Component {
  render () {
    const { onSignIn } = this.props;

    return (
      <div>
        <StickyBar />
        <Switch>
          <PropsRoute exact path='/' component={ResourceGrid} resources={resources} />
          <Route path='/register' component={Register} />
          <PropsRoute path='/signin' component={SignIn} onSignIn={onSignIn} />
          {/* <PropsRoute path='/upload' component={Upload} /> */}
          <Route component={null} />
        </Switch>
        {/* {
          signedIn
            ? <ResourceGrid resources={resources} />
            : <SignIn onSignIn={onSignIn} />
        } */}
        <DialogContainer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
