import './App.css';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>DAILY POST</title>
      </Helmet>
      <Route path={['/@:username', '/']} component={PostListPage} exact />
      <Route path={['/login']} component={LoginPage} />
      <Route path={['/register']} component={RegisterPage} />
      <Route path={['/write']} component={WritePage} />
      <Route path={['/@:username/:postId']} component={PostPage} />
    </>
  );
}

export default App;
