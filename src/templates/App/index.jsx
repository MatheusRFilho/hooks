import './styles.css';

import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';
import { Div } from '../../components/Div';

import { AppContext } from '../../contexts/AppContext/index';

function App() {
  return (
    <>
      <AppContext>
        <Div />
      </AppContext>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </>
  );
}

export default App;
