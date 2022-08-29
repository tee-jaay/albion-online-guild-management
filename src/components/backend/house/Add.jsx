import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { DASHBOARD } from "../../routes/backend";
import ApiURLs from "../../../api/ApiURLs";
import Layout from "../layout/Layout";
import Loader from "../loader/Loader";
import { toast } from "react-toastify";

const Add = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [houseName, setHouseName] = useState("");
  const [houseLoc, setHouseLoc] = useState("");
  const [islandId, setIslandId] = useState("");
  const [islands, setIslands] = useState([]);

  useEffect(() => {
    axios
      .get(ApiURLs.ISLANDS)
      .then((res) => {
        setIslands(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let sendData = new FormData();
    sendData.append("house_name", houseName);
    sendData.append("house_loc", houseLoc);
    sendData.append("island_id", islandId);

    axios
      .post(ApiURLs.HOUSES, sendData)
      .then((res) => {
        console.log("house", res.data);
        setTimeout(() => {
          setIsLoading(false);
          toast.success("House added");
        }, 500);
        history.push(DASHBOARD.HOUSES);
      })
      .catch((err) => {
        console.error(err);
        setTimeout(() => {
          setIsLoading(false);
          toast.error("Server error: ", err);
        }, 500);
      });
  };

  if (isLoading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  } else {
    return (
      <>
        <Layout>
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add House</h4>
                <form className="forms-sample" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="island">Island</label>
                    <select
                      onChange={(e) => setIslandId(e.target.value)}
                      class="form-control form-control-sm"
                      id="island"
                    >
                      <option>Which Island?</option>
                      {islands.map((island, index) => (
                        <option key={index} value={island.id}>
                          {island.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="house_name">House Name</label>
                    <input
                      onChange={(e) => setHouseName(e.target.value)}
                      class="form-control form-control-sm "
                      type="text"
                      name="house_name"
                      id="house_name"
                      placeholder="CH001"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="house_loc">House Location</label>
                    <input
                      onChange={(e) => setHouseLoc(e.target.files[0])}
                      class="form-control-file form-control-sm "
                      type="file"
                      name="house_loc"
                      id="house_loc"
                    />
                  </div>

                  <button type="submit" className="btn btn-sm btn-primary mr-2">
                    Add
                  </button>
                  <button className="btn btn-sm btn-light">Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
};
export default Add;
