# Project Overview (fixing the leftovers)

In this project I was given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and I'm now left with an application with an incomplete test suite. I have created six tests to check the functionality of this app.


## Execution

1. Clone this repository.
2. App reqires an internet connection for fonts.
3. [Jasmine 2.1](https://jasmine.github.io/) is included in the repository.
4. Open index.html in a browser of your choice.
5. The following tests will automatically be executed and the results displayed at bottom of the page:
* Verifies each feed has a URL and it is not empty.
* Verifies eachfeed has a name and it is not empty.
* Verifies that the feed selection menu is hidden by default
* Verifies that the feed menu is displayed when menu clicked
* Verifies that at least one feed is displayed on initial page load
* Verifies that page content is different when another feed is selected.

## References Used
*[Jasmine 2.1 Documentation](https://jasmine.github.io/2.1/introduction)