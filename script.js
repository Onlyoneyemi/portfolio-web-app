const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
const opentab = (tabname) => {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
    }

const sidemenu = document.getElementById("sidemenu")

const openmenu = () => {
    sidemenu.style.right = "0"
}
const closemenu = () => {
    sidemenu.style.right = "-200px"
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzItlBXKjmf0NrrJLNhGc4rQzv3C26t9MHiK60MgKnOx8UmiY3KjZpHy1N9w3zAhKo_RA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
      
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
    setTimeout(function() {
        msg.innerHTML = ""
    }, 5000)
    form.reset()
        })
    .catch(error => console.error('Error!', error.message))
})










// <script>
//         var tablinks = document.getElementsByClassName("tab-links");
//         var tabcontents = document.getElementsByClassName("tab-contents");
//         function opentab(tabname) {
//             for(tablink of tablinks) {
//                 tablink.classList.remove("active-link")
//             }
//             for(tabcontent of tabcontents) {
//                 tabcontent.classList.remove("active-tab")
//             }
//             event.currentTarget.classList.add("active-link")
//             document.getElementById(tabname).classList.add("active-tab")
//         }
//     </script>

//     <script>

//         var sidemenu = document.getElementById("sidemenu")

//         function openmenu() {
//             sidemenu.style.right = "0"
//         }
//         function closemenu() {
//             sidemenu.style.right = "-200px"
//         }

//     </script>
    
//     <script>
//         const scriptURL = 'https://script.google.com/macros/s/AKfycbzItlBXKjmf0NrrJLNhGc4rQzv3C26t9MHiK60MgKnOx8UmiY3KjZpHy1N9w3zAhKo_RA/exec'
//         const form = document.forms['submit-to-google-sheet']
//         const msg = document.getElementById("msg")
      
//         form.addEventListener('submit', e => {
//           e.preventDefault()
//           fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//             .then(response => {
//                 msg.innerHTML = "Message sent successfully"
//                 setTimeout(function() {
//                     msg.innerHTML = ""
//                 }, 5000)
//                 form.reset()
//             })
//             .catch(error => console.error('Error!', error.message))
//         })
//       </script>