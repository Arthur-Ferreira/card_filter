window.onload = () => {
  const filterElement = document.querySelector('#filter')
  const cards = document.querySelectorAll('.cards li')

  filterElement.addEventListener('input', filter)

  function filter() {

    if (filterElement.value !== '') {
      cards.forEach(card => {
        let cardTitle = card.querySelector('h2')
        cardTitle = cardTitle.textContent.toLowerCase()
        let filterText = filterElement.value.toLowerCase()

        if (!cardTitle.includes(filterText)) {
          card.style.display = "none"
        }
        else {
          card.style.display = "block"
        }
      })
      
    } else {
      cards.forEach(card => {
        card.style.display = "block"
      })

    }
  }
}