
import './App.css'
import Clothing from './components/Clothing';
import Home from './components/Home';
import Mobiles from './components/Mobiles';
import Demo from './Demo'
function App() {

  //yahape jyada tar js ka code likhte ho
  let name ="Tejas";

  let a=3;
  let b=5;
  let add=a+b;

  return (
    //return mein jyada tar html ka code likha jata hai
    <>
      <h1>Root Component(App.jsx)</h1>
      <h1>Hello welcome {name}</h1>

      <h2>Sum = {add}</h2>

      <Demo/>
     <Home/>
      <Clothing/>
      <Mobiles/>
    </>
  )
}

export default App
