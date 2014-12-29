Feature: A user can create a budget

  As a user of unquantifiable treasures
  I want to create a new budget
  So that I can acquire untold treasures

  Scenario: Create a budget
    Given I am on the home page
    And I am logged in
    When I click on "Create Budget"
    Then A new budget should be created