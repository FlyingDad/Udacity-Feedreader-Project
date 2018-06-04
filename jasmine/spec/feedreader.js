/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function () {

    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function () {
      expect(allFeeds).toBeDefined();
      // There should be one or more feeds
      expect(allFeeds.length).toBeGreaterThan(0);
    });

    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('has URL and it is not empty', function () {
      // check every feed has a url and it is not blank
      allFeeds.forEach(function (feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url).not.toBe('');
      })
    });

    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('has a name and it is not empty', function () {
      // check every feed has a name and it is not blank
      allFeeds.forEach(function (feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toBe('');
      })
    });
  });


  describe('The menu', function () {
    /* TODO: Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */

    let body = document.querySelector('body');
    it("is hidden", function () {

      expect(body.classList.contains('menu-hidden')).toBe(true);
    });
    /* TODO: Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */

    it('menu changes visibility on click', function () {
      // Get link that opens and closes the menu. When will 'trigger' the
      // expect statement when clicked
      $(".menu-icon-link").trigger('click');
      // first click should display menu (remove 'menu-hidden' class)
      expect($('body').hasClass('menu-hidden')).toBe(false);
      // Now we set the click trigger again to check for adding
      // the class 'menu-hidden'
      $(".menu-icon-link").trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });


  describe('Initial Entries', function () {
    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    // Reference for below function
    // https://jasmine.github.io/2.9/introduction
    // This spec will not start until the done function is called in
    // the call to beforeEach above. And this spec will not complete
    // until its done is called. Source
    // https://jasmine.github.io/2.9/introduction
    beforeEach(function (done) {
      //Allow 1 second to get feed data
      setTimeout(function () {
        // call loadFeed function in app.js on index 0, allow one second
        loadFeed(0, done);
      }, 1000);
    });

    it('feed container should have at least one element(link)', function () {
      // get nodelist of all links in feed
      let feed = document.querySelectorAll('.feed a');
      // check that the list has at least one or more links
      expect(feed.length).toBeGreaterThan(0);
    });

  });

  describe('New Feed Selection', function () {
    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */

    // Save feed links as nodelists
    let firstFeedContent;
    let secondFeedContent;

    // call loadfeed on two different feeds (index 0 and 1)
    // and save the links in as nodelist.
    // loadfeeds are nested within each other before.
    beforeEach(function (done) {
      // load first feed and save content
      loadFeed(0, function(){
        firstFeedContent = document.querySelectorAll('.feed a');
        //console.log(firstFeedContent);
        // load second feed and save content
        loadFeed(1, function(){
          secondFeedContent = document.querySelectorAll('.feed a');
          //console.log(secondFeedContent);
          done();
        })
      });
    })

    it('new feed changes page content', function (done) {
      // What I'm doing is getting the first link (href string)
      // from each feed content and comparing it
      // no need to compare all of them
      let firstLinkInFirstFeed = firstFeedContent[0].getAttribute('href');
      let firstLinkInSecondFeed = secondFeedContent[0].getAttribute('href');
      expect(firstLinkInFirstFeed).not.toEqual(firstLinkInSecondFeed);
    });
  });

  // end of Jasmine function
}());