$('.home-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    autoplay: true
})

const scriptURL =
       'https://script.google.com/macros/s/AKfycbwbXW7Vb4MUC-A3AKKCQIRGUothC-kRiv6uAPxgjoxFkfoGBcPUPpCYADOBJDUQA6aD/exec'
   const form = document.forms['form-google-sheet']

   form.addEventListener('submit', e => {
       e.preventDefault()
       fetch(scriptURL, {
               method: 'POST',
               body: new FormData(form)
           })
           .then(response => alert(
               "Thanks for your valuable feedback!!!"))
           .catch(error => console.error('Error!', error.message))
   })