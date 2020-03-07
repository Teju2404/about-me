QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST rectangle', assert =>{
    //expect two async tests
    assert.equal(rectangle(2,3), 6, 'positive integer')
    assert.notEqual(rectangle(-2,0), null, 'invalid')
    assert.notEqual(rectangle(3,0), null, 'invalid')
})

// QUnit.test('TEST rectangle', assert => {
//     assert.equal(sphereVolume(2), 100.48, 'Positive integers')
//     assert.equal(sphereVolume(-1), -12.56, 'Negative integers')
//     assert.equal(sphereVolume(3.04), 352.86646784000004, 'Float Values')
//   })

QUnit.config.autostart = false  // sync = false; start after loading html

// This script, called when the page loads, reaches out to the app that we wish to test
// It basically pastes the contents of that page into *this* web page, whew! This shows
// how we manipulate the DOM.

// The openingTag and closingTag specify which part of the original app's web page that we grab here
// Pretty slick eh?

window.addEventListener('load', () => {
    const appURL = '../index.html' // reach out to the html for the app (js-gui)
    const openingTag = '<main class="container mt-5 flex-fill">'
    const closingTag = '</main>' // go grab it!
    fetch(appURL, { method: 'GET' })
      .then(response => {
        return response.text() // returns promise
      })
      .then(txt => {                
        const start = txt.indexOf(openingTag)
        const end = txt.indexOf(closingTag) + closingTag.length
        const html = txt.substring(start, end) // we only want part of the page
        const qunitFixtureBody = document.querySelector('#qunit-fixture')
        qunitFixtureBody.innerHTML = html // put the page into the DOM - the second div associated with this page
        console.info(qunitFixtureBody) // print it out so we can see it (it doesn't get inserted into the page)
        QUnit.start() // start the actual testing - it finds and runs both the tests, defined in QUnit.test()
      })
      .catch(error => {
        console.error('error:', error);
        QUnit.start()
      })
  })