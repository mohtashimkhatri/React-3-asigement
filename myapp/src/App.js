import "./App.css";
import Sminp from "./Component/Cminp";
import Smbutton from "./Component/Smbutton";
import Smdata from "./Component/Smdata";
import Smselect from "./Component/Smselect";
import Smtable from "./Component/Smtable";
// import './app.css'

function App() {
  const order = () => {
    alert("onclick SuccessFully");  
  };
  return (
    <div>
      <h1>Input Componet</h1>
      <Sminp type="text" value="MohtashimRaza" />
      <h1>Button Componet</h1>
      <Smbutton label="addTask" onclick={order} />
      <h1>Select Component</h1>
      <Smselect label="enter Your CAR name" value1="Honda City" value2="Aqua" />
      <h1>Table Component</h1>
      <Smtable
        heading1="Company"
        heading2="Country"
        heading3="Contact"
        pera1="Alfreds"
        pera2="Maria Anders"
        pera3="Germany"
        p1="Centro comerce"
        p2="Francisco Chang"
        p3="Mexico"
      />
      <h1>Data Component</h1>
      <Smdata name='mohtashim' id='1' age='18' active='true' institute='adamjee and JawanPakistan' />
    </div>
  );
}

export default App;
