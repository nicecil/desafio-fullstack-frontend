import React from 'react';
import './App.css';
import UserTable from "./components/table/table";
import TableData from "./mocks/mocks"
import Header from "./components/header/header"

function App() {
  const [searchBarState, setSearchBarState] = React.useState("")
  return (
      <div className="App">
        <Header setSearchBar = {setSearchBarState}></Header>
        <UserTable
            tableInfo={TableData}
        searchBarText = {searchBarState}
        > </UserTable>
      </div>
  )
}

export default App;