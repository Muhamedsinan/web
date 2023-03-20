function sendEmail() {

  const scriptURL = 'https://script.google.com/macros/s/AKfycby8H-vCv_D442aLGkpj9OgLKtqjRJiH1KvQQuf6ldDQ8K_Dg5Uha92r2h-u6Y3Kyk8/exec'
  const form = document.forms['contact-us']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        form.reset()
        alert('Success!')
      })
      .catch(error => console.error('Error!', error.message))
  })
}
