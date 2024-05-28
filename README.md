Create a guest list app using React that allows for:

- [ ] Adding a guest using separate first name and last name fields
  - [ ] The first name input needs to have a related label containing `First name`
  - [ ] The last name input needs to have a related label containing `Last name`
  - [ ] A guest should be created upon pressing <kbd>Return</kbd> in the last name input
  - [ ] After a guest is created, both fields need to be cleared again
  - [ ] Newly created guests should be set as **not attending** by default
  - [ ] Each guest (all content and form fields) should be contained inside a div element with the attribute `data-test-id="guest"`
- [ ] Deleting a guest with a button that **either**:
  - [ ] Contains the text `Remove`
  - [ ] Has an `aria-label` attribute which starts with `Remove` (eg. `Remove <first name> <last name>`)
- [ ] Setting a guest as "attending" by clicking on a checkbox
  - [ ] The checkbox needs to have an `aria-label` which contains the text `attending` (eg. `<first name> <last name> attending status`) - the text can be uppercase or lowercase
  - [ ] On the first click of the attending checkbox, the guest needs to be set to attending (the checkbox needs to be checked)
  - [ ] On the second click of the attending checkbox, the guest needs to be set to not attending (the checkbox needs to be unchecked)
- [ ] Set up [this API](https://github.com/upleveled/express-guest-list-api-memory-data-store) and read the docs to understand how you can use it to store and retrieve data:
  - [ ] Save any changes to the API
  - [ ] Load the guest list from this API
- [ ] While the guest list is first loaded from the API (on page load):
  - [ ] Show a loading message containing the text `Loading...`
  - [ ] Disable the form fields

The default view should show all guests in the list.

Some features are similar to [this example](https://todomvc.com/examples/react/dist/) - check this out to see how the app should generally behave.

## TODO's

- [x] Create two input fields, one for first name, one for last name
- [x] Set the related label to the fields
  - [x] First name field needs to have related label containing `First name`
  - [x] Last name field needs to have related label containing `Last name`
- [x] Import useState Hook
- [x] Manage input states
  - [x] Initialize state variables for `First name` & `Last name` using the useState hook
  - [x] Create a function to handle changes in the first name input field
  - [x] Create a function to handle changes in the last name input field
  - [x] Attach Handlers to Inputs
- [x] Create a react form component
- [x] Figure out how to submit the input in the console (handleSubmit)
- [x] Figure out how to enter the submission by pressing return
- [x] Create a function to handle form submission (handleSubmit).
  - [x] Process the input values (e.g., add a new guest)
  - [x] Clear inputs
- [x]Set up API (https://github.com/upleveled/express-guest-list-api-memory-data-store)
- [ ] Save the data somehow to the API
- [ ] Fetch the Data from the API
- [ ]
- [ ]
- [ ]
- [ ]
- [ ] Create a Checkbox that sets the state to attending
- [ ] Set default guest properties (not attending).

## Acceptance Criteria

- [ ] Preflight runs without errors in your project
- [ ] [Drone bot](https://learn.upleveled.io/pern-extensive-immersive/modules/cheatsheet-tasks/#upleveled-drone) has been tagged and responded with a passing message
- [ ] Correct GitHub commit message format (see [Writing Commit Messages](https://learn.upleveled.io/pern-extensive-immersive/modules/cheatsheet-git-github/#writing-commit-messages))
