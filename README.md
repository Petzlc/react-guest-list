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
- [x] Let the input appear on the website and not only in the console
- [x] Newly created guests should be set as not attending

  - [x] Identify the part of the code where the form submission occurs. This could be in a form submission handler function.
  - [x] Identify the function responsible for handling form submissions.
  - [x] Add Default Status to Form Data:
    - [x] Within the form submission handler function, access the form data containing the guest's first name, last name, and other relevant information.
    - [x] Add a new object with a property to the guest that handles the 'attending' state
  - [x] Set Default Status:

    - [x] Add code to set the default status as "not attending" to the guest being created. This could involve adding a property to the form data object or setting a state variable.
    - [x] Set the 'attending'property for each guest to a default value of 'false' or a string of 'not attending' (in the funciton that handles form submission)

  - [x] Update Form Data State:
    - [x] If using state to manage form data, update the state with the new guest data including the default status.

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
