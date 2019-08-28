import React from 'react';
class SearchBox extends React.Component {
  render() {
    return (
      <div class="row searchBox">
        <div class="col-sm-12 searchBox-inner">
          <div class="form-group has-feedback">
            <input
              id="searchText"
              type="text"
              class="form-control"
              name="searchText"
              placeholder="Search"
            />
            <span class="glyphicon glyphicon-search form-control-feedback" />
          </div>
        </div>
      </div>
    );
  }
}
export default SearchBox;