import { Link } from "react-router-dom";
import { useBookmark } from "../../context/BookmarkListContext";
import Loader from "../Loader/Loader";
import ReactCountryFlag from "react-country-flag";

function Bookmark() {
  const { isLoading, bookmarks, currentBookmark } = useBookmark();

  if (isLoading) return <Loader />;
  return (
    <div>
      <h2>Bookmark List</h2>
      <div className="bookmarkList">
        {bookmarks.map((item) => {
          return (
            <Link
              key={item.id}
              to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
            >
              <div
                className={`bookmarkItem ${
                  item.id === currentBookmark?.id ? "currentBookmark" : ""
                }`}
              >
                <ReactCountryFlag svg countryCode={item.countryCode} />
                &nbsp; <strong>{item.cityName}</strong> &nbsp;
                <span>{item.country}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Bookmark;