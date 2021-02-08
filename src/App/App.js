import "/src/App/app.css";
import Content from "../Content/Content";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";

export default function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Content></Content>
      <Card></Card>
    </div>
  );
}
