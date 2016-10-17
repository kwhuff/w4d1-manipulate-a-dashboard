// 1. Count the number of records in the "Current Quarter Details" table.
//USE .LENGTH
var listings = document.querySelectorAll('tbody > tr')
console.log(listings.length)

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
//TARGET ITEMS IN ORDER (1ST, 2ND, 3RD, 4TH).  USE .setAttribute(src='')
var photos = document.querySelectorAll('img')
photos.forEach(function(image, i){
  var alt = ['winter', 'spring', 'summer', 'fall']
  image.src = 'http://unsplash.it/400?image=' + (i + 50)
  image.setAttribute('alt', alt[i] + ' image')
})


// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.
//a different random number each time Math.random  Concatonate appropriately.  Comma is a bonus.
var amounts = document.querySelectorAll('.text-muted')
amounts.forEach(function(amount){
  amount.innerHTML = '$' + Math.round(Math.random()*10000) + '.00'
})


// 4. Change the currently selected left side menu item from Overview to Reports.
//alter class list
var selectors = document.querySelectorAll('.nav-sidebar > li')
selectors.forEach(function(selector){
  selector.classList.remove('active')
  if(selector.textContent === "Reports")
  selector.classList.add('active')
})
console.log(selectors)

// 5. Set the default search input value to "Q4 sales".
//SEE LECTURE NOTES
var searchPlaceholders = document.querySelectorAll('.form-control')
searchPlaceholders.forEach(function(searchPlaceholder){
  searchPlaceholder.setAttribute('placeholder', 'Q4 Sales')
})



// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
//go to getbootstrap and reference the tables section
var tableHovers = document.querySelectorAll('table')
tableHovers.forEach(function(tableHover){
  tableHover.classList.add('table-hover')
})

// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
var colorListings = document.querySelectorAll('tbody > tr')
  colorListings[6].classList.add('success')
  colorListings[7].classList.add('success')
  colorListings[8].classList.add('success')
  colorListings[9].classList.add('success')

// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
var tableHeaders = document.querySelectorAll('tr > th')
tableHeaders.forEach(function(tableHeader, i){
  var headerNames = ['ID', 'First Name','Last Name', 'Department','Client']
  tableHeader.innerHTML = headerNames[i]
})

// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]
var objectArrays = document.querySelectorAll('tbody > tr')
var array = []
objectArrays.forEach(function(objectArray){
  var object = {
    id: Number(objectArray.children[0].innerHTML.replace(',', '')),
    firstName: objectArray.children[1].innerHTML,
    lastName: objectArray.children[2].innerHTML,
    department: objectArray.children[3].innerHTML,
    client: objectArray.children[4].innerHTML
  }
  array.push(object)
})
console.log(array)



// 10. Make each word in the table capitalized.
var tableDataWords = document.querySelectorAll('tbody > tr > td')
tableDataWords.forEach(function(tableDataWord){
  tableDataWord.style.textTransform = "capitalize"
})
