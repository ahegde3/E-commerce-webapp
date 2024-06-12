import React from "react";
import SearchBar from "material-ui-search-bar";



export default function SearchBox({searchProducts}) {

  return (
    <div>
      <SearchBar
        onRequestSearch={(value) => {
          searchProducts(value)
        }}
        placeholder="Search "
        autoFocus
      />
    </div>
  );
}
