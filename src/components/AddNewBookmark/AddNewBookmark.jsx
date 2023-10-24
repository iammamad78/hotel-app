import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import useUrlLocation from "../../Hooks/useUrlLocation";

function AddNewBookmark() {
  const [lat, lng] = useUrlLocation();
  console.log(lat, lng);
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="addNewBookmark--title">Add New Bookmark</h2>
      <form className="form">
        <div className="formControl">
          <label htmlFor="cityName">City Name</label>
          <input type="text" name="cityName" id="cityName" />
        </div>
        <div className="formControl">
          <label htmlFor="country">Country</label>
          <input type="text" name="country" id="country" />
        </div>
        <div className="buttons">
          <button
            className="btn btn--previous"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            Back
          </button>
          <button className="btn btn--primary">Add New Bookmark</button>
        </div>
      </form>
    </div>
  );
}

export default AddNewBookmark;