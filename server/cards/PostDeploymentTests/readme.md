# API Tests

This test suite contains API tests to check eligibility service

# Framework Tools and Libraries
* **BDD Test Specification**: Cucumber (Gherkin), structured English sentences
* **Main Programming Language**: Java
* **API Framework** : Rest-assured  
* **IDE**: Intellij
* **Assertions** : Hamcrest, Junit

# Run Tests

1. Junit Runner 
Cucumber Runner class is used to run a group of Tests which are tagged and represented in form of Feature files & Scenarios.

Location of runner class  - src/test/java/runner/CucumberRunner.java

Tags:
@Eligibility - Functionality Tests
@Regression - Tests to run part of Regression
@Positive, @Negative, @Smoke - Optional Tags

2. Gradle Cucumber Task

**./gradlew cucumber**

# Report
HTML Report will be generated at /target/report/cucumber.html

# POSTMAN Collection

Import collection from cards/postman