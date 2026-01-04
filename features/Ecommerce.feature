Feature: GLAMS Login Functionality

Scenario: GLAMS Login
  Given user is on GLAMS Login Page
  When user enters valid "Hariprasad" and "Perigord1!"
  And clicks on "Login" button
  Then user should be navigated to the Dashboard successfully
