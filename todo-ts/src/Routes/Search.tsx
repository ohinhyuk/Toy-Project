import { useLocation } from "react-router";

function Search() {
  const location = useLocation();
  console.log(location);
  const keyword = new URLSearchParams(location.search);
  console.log(keyword.get("keyword"));

  return <div>Search</div>;
}

export default Search;
