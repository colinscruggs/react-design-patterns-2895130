import './App.css';
import { SplitScreen } from './SplitScreen';

const LeftComponent = ({title = 'Navigation'}) => {
    return <h1>{title}</h1>
}

const RightComponent = ({message = 'Welcome'}) => {
    return <h1>{message}</h1>
}

function App() {
  return (
    <SplitScreen className="App" leftWeight={1} rightWeight={3}>
        <LeftComponent />
        <RightComponent />
    </SplitScreen>
  );
}

export default App;
