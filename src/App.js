import ImageButton from "./components/ImageButton";
import { datas } from "./data";

function App() {
  return (
    <div className="container-wrapper">
      <div className="container">
        <div className="header">
          <div className="title">3D EQUIPMENT GALLERY</div>
        </div>
        <div className="image-buttons-wrapper">
          {datas.map((data) => {
            return <ImageButton key={data.id} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
