import React from 'react';
import ResourceGrid from '../Components/ResourceGrid/ResourceGrid';
import StickyBar from '../Components/StickyBar/StickyBar';
import { Route, Switch } from 'react-router-dom';
import { SourceType } from '../constants.js';
import { requestSignIn } from '../Actions/SignInAction.js';
import SignIn from '../Components/SignIn/SignIn.js';
import Register from '../Components/Register/Register.js';
import PropsRoute from '../Components/PropsRoute/PropsRoute.js';
import { connect } from 'react-redux';

const resources = [
  { id:'sadas3r5234', title: 'Ian Sweeney for Callahan 2019', srcType: SourceType.VIDEO, src: 'https://www.youtube.com/embed/xlwL_vSsIPI' },
  { id: 'abc', src: '' }, { id: 'abcd', src: '' }, { id: 'abce', src: '' },
  { id: 'abcf', src: '' }, { id: 'abcg', src: '' }, { id: 'abch', src: '' },
  { id: 'abci', src: '' }, { id: 'abcj', src: '' }, { id: 'abck', src: '' }
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
    onSignIn: (event) => dispatch(requestSignIn(event.target.value, event.target.value))
  };
};

class App extends React.Component {
  render () {
    const { onSignIn, signedIn, user } = this.props;

    return (
      <div>
        <StickyBar />
        <Switch>
          <PropsRoute exact path='/' component={ResourceGrid} resources={resources} />
          <Route path='/register' component={Register} />
          <PropsRoute path='/signin' component={SignIn} onSignIn={onSignIn} />
          <Route component={null} />
        </Switch>
        {/* {
          signedIn
            ? <ResourceGrid resources={resources} />
            : <SignIn onSignIn={onSignIn} />
        } */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
