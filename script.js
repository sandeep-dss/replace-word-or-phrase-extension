replaceText(document.body)

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText)
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/batman/gi)) {
      const newElement = document.createElement('span')
      newElement.innerHTML = element.textContent.replace(/(batman)/gi, '<span class="rainbow">🤡</span>')
      element.replaceWith(newElement)
    }
  }
}