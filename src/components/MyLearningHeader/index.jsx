import { SearchField, Navbar } from "@openedx/paragon";

const MyLearningHeader = ({headerText, subHeaderText, onSearchSubmit}) => {
  return (
    <Navbar expand="lg">
      <div>
        <Navbar.Brand as="h1">
          {headerText}
        </Navbar.Brand>
        <small className="ml-3">{subHeaderText}</small>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <SearchField.Advanced
          onSubmit={onSearchSubmit}
          className="ml-auto"
        >
          <SearchField.Input placeholder="Search" />
          <SearchField.ClearButton />
          <SearchField.SubmitButton />
        </SearchField.Advanced>
      </Navbar.Collapse>
    </Navbar>

  )
}

export default MyLearningHeader;
