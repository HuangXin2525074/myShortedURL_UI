import 'bootstrap/dist/css/bootstrap.css';
import AddUrlComponent from "./components/Shorted-url/AddUrlComponent";

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">URL Shortener</h3>
            </div>
            <div className="card-body">
              <AddUrlComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
