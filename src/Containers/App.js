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
import DialogContainer from '../Components/DialogContainer/DialogContainer';
import { showDialog, hideDialog } from '../Actions/DialogAction.js';
import Resource from '../Components/Resource/Resource';
import SearchPage from '../Components/SearchPage/SearchPage';
import NotFoundPage from '../Components/NotFoundPage/NotFoundPage';

const resources = [
  { id: 'sadas', publicKey: 'PX234Yc', title: 'Ian Sweeney for Callahan 2019', srcType: SourceType.VIDEO, link: 'https://www.youtube.com/embed/xlwL_vSsIPI', thumbnailType: 'link', thumbnail: 'https://img.youtube.com/vi/xlwL_vSsIPI/mqdefault.jpg' },
  { id: 'sadasr5234', publicKey: 'PX234Yc', title: 'Ian Sweeney for Callahan 2019', srcType: SourceType.VIDEO, link: 'https://www.youtube.com/embed/xlwL_vSsIPI', thumbnailType: 'link', thumbnail: 'https://img.youtube.com/vi/xlwL_vSsIPI/mqdefault.jpg' },
  { id: 'sadas5234', publicKey: 'PX234Yc', title: 'Ian Sweeney for Callahan 2019', srcType: SourceType.VIDEO, link: 'https://www.youtube.com/embed/xlwL_vSsIPI', thumbnailType: 'link', thumbnail: 'https://img.youtube.com/vi/xlwL_vSsIPI/mqdefault.jpg' },
  { id: 'sadas234', publicKey: 'PX234Yc', title: 'Ian Sweeney for Callahan 2019', srcType: SourceType.VIDEO, link: 'https://www.youtube.com/embed/xlwL_vSsIPI', thumbnailType: 'link', thumbnail: 'https://img.youtube.com/vi/xlwL_vSsIPI/mqdefault.jpg' },
  { id: 'sadas34', publicKey: 'PX234Yc', title: 'Ian Sweeney for Callahan 2019', srcType: SourceType.VIDEO, link: 'https://www.youtube.com/embed/xlwL_vSsIPI', thumbnailType: 'link', thumbnail: 'https://img.youtube.com/vi/xlwL_vSsIPI/mqdefault.jpg' },
  { id: 'sadas4', publicKey: 'PX234Yc', title: 'Ian Sweeney for Callahan 2019', srcType: SourceType.VIDEO, link: 'https://www.youtube.com/embed/xlwL_vSsIPI', thumbnailType: 'link', thumbnail: 'https://img.youtube.com/vi/xlwL_vSsIPI/mqdefault.jpg' },
  { id: 'sadar5234', publicKey: 'PX234Yc', title: 'Ian Sweeney for Callahan 2019', srcType: SourceType.VIDEO, link: 'https://www.youtube.com/embed/xlwL_vSsIPI', thumbnailType: 'link', thumbnail: 'https://img.youtube.com/vi/xlwL_vSsIPI/mqdefault.jpg' },
  { id: 'sas3r5234', publicKey: 'PX234Yc', title: 'Ian Sweeney for Callahan 2019', srcType: SourceType.VIDEO, link: 'https://www.youtube.com/embed/xlwL_vSsIPI', thumbnailType: 'link', thumbnail: 'https://img.youtube.com/vi/xlwL_vSsIPI/mqdefault.jpg' },
  { id: 'sdas3r5234', publicKey: 'PX234Yc', title: 'Ian Sweeney for Callahan 2019', srcType: SourceType.VIDEO, link: 'https://www.youtube.com/embed/xlwL_vSsIPI', thumbnailType: 'link', thumbnail: 'https://img.youtube.com/vi/xlwL_vSsIPI/mqdefault.jpg' },
  { id: 'sd3r534', publicKey: 'PX234Yc', title: 'Ian Sweeney for Callahan 2019', srcType: SourceType.VIDEO, link: 'https://www.youtube.com/embed/xlwL_vSsIPI', thumbnailType: 'link', thumbnail: 'https://img.youtube.com/vi/xlwL_vSsIPI/mqdefault.jpg' },
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
          <PropsRoute exact path='/profile' component={NotFoundPage} message='Profile page coming soon...' />
          <PropsRoute exact path='/search' component={SearchPage} />
          <Route path='/register' component={Register} />
          <PropsRoute path='/signin' component={SignIn} onSignIn={onSignIn} />
          <PropsRoute path='/r/:resourceKey' component={Resource} />
          <PropsRoute component={NotFoundPage} message={'We\'re sorry! The page you are looking for does not exist.'} />
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
