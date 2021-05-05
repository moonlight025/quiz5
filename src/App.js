import logo from './logo.svg';
import './App.css';
import './bottom';
import Bottom from './bottom';
function App() {
  var output=[];
  for(let i=1;i<11;++i){
    output.push(<Bottom/>)
  }
  return (
    output
  );
}

export default App;
