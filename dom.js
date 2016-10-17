var body = document.body
console.log(body)

var h1 = document.body.childNodes[1]
console.log(h1)

var helloWorld = h1.innerHTML//how to get inside contents of an HTML tag
console.log(helloWorld)

h1.innerHTML = 'Hello Universe'

console.dir(h1)

var helloH1 = document.getElementById('hello')
console.log(helloH1)

var navItems = document.getElementsByClassName('nav-item')
console.log(navItems)

var navItems = document.querySelectorAll('body *')//querySelector returns only the first match
console.log(navItems)

var helloH1 = document.querySelectorAll('#Hello')
console.log(helloH1)

//console.log(Array.from(navItems).includes('li'))

navItems.forEach(function(navItem){
  //console.dir(navItem)
  //console.log(navItem.tagName)
  navItem.addEventListener('mouseover', function(e){
    e.target.classList.add('red')
  })
    navItem.addEventListener('click', function(e){
      e.target.remove()
    })
})
//   if (navItem.tagName === "LI" && navItem.classList.contains('active')){
//     //navItem.style.color = 'red'
//     navItem.classList.add('red')
//   }

var navItems = document.querySelectorAll('.nav-item')

navItems.forEach(function(navItem){
  console.log(navItem.getAttribute('title'))
  console.log(navItem.tagName)
  console.log(navItem.className)
  console.log(navItem.id)
  console.log(navItem.getAttribute('data-details'))
  console.log(navItem.setAttribute('title', 'foo'))
  navItem.innerHTML = '<a href="http://google.com">' + navItem.getAttribute('data-details') + '</a'
  console.log(navItem.innerHTML)

})

var searchInput = document.getElementById('search')
//var searchInput = document.querySelectorAll('#search')

searchInput.setAttribute('value', 'pizza parties in my area')
searchInput.value = 'movies near me'
alert(searchInput.value)
//alert(searchInput.getAttribute('value'))
