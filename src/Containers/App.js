import React from 'react';
import ResourceGrid from '../Components/ResourceGrid/ResourceGrid';
import StickyBar from '../Components/StickyBar/StickyBar';
import { SourceType } from '../constants.js';
import { requestSignIn } from '../Actions/SignInAction.js';
import SignIn from '../Components/SignIn/SignIn.js';
import { connect } from 'react-redux';

const resources = [
  { title: 'Ian Sweeney for Callahan 2019', srcType: SourceType.VIDEO, src: 'https://www.youtube.com/embed/xlwL_vSsIPI' },
  { src: '' }, { src: '' }, { src: '' },
  { src: '' }, { src: '' }, { src: '' },
  { src: '' }, { src: '' }, { src: '' }
];

const mapStateToProps = (state) => {
  return {
    user: state.signIn.user,
    signedIn: state.signIn.signedIn
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
        {
          signedIn
            ? <ResourceGrid resources={resources} />
            : <SignIn onSignIn={onSignIn} />
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
