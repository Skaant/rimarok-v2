const path = 'https://europe-west1-nalytimk.cloudfunctions.net/addEntry'
const buttonsLabel = {
  id: {
    ok: 'Identifiant de navigation \: activé \:)',
    non: 'Identifiant de navigation \: désactivé'
  },
  ip: {
    ok: 'Enregistrement de l\'adresse IP \: activé \:)',
    non: 'Enregistrement de l\'adresse IP \: désactivé'
  }
}
function getStoredConf() {
  return JSON.parse(localStorage.getItem('nalytimk'))
}
function updateStoredConf(data) {
  localStorage.setItem('nalytimk', JSON.stringify(data))
}
function handleButtonClick(target, prop) {
  const storedConf = getStoredConf()
  const newValue = prop === 'ip'
    ? !storedConf[prop]
    : storedConf[prop]
      ? false
      : ((Date.now() - new Date(365.25*24*60*60*1000*50))
        + '-' + Math.round(Math.random() * 100000))
  updateStoredConf({
    ...storedConf,
    [prop]: newValue
  })
  sendEntry()
  target.innerHTML = buttonsLabel[prop][ newValue ? 'ok' : 'non' ]
}
function sendEntry() {
  const storedConf = getStoredConf()
  fetch(`${ path }?host=${ location.host }&path=${ location.pathname }${
    storedConf.id ? '&id=' + storedConf.id : '' }${
    storedConf.ip ? '&ip=true' : '' }`)
    .catch(err => console.warn(err))
}

let storedConf = getStoredConf()
if (!storedConf) {
  storedConf = { read: false, id: false, ip: false }
  updateStoredConf(storedConf)
}

if (!storedConf.read) {
  const container = document.createElement('div')
  container.style = 'bottom: 0; z-index: 10'
  container.classList = 'position-sticky w-100 p-4'
  const div = document.createElement('div')
  div.classList = 'alert alert-secondary mb-0'
  const text = document.createElement('p')
  text.innerHTML =
    'Bonjour, je cherche à améliorer '
      + 'l\'expérience utilisateur de mon site et pour cela j\'aurais '
      + 'besoin de votre accord pour stocker certaines de vos données. '
      + '<b>L\'usage est uniquement statistique !</b></p>'
      + '<p>Plus d\'informations sur la page '
      + '<a href="/mentions-legales">Mentions légales</a>.</p>'
  div.appendChild(text)
  const menu = document.createElement('div')
  menu.innerHTML =
    '<button id="nalytimk-menu-id" type="button" class="btn btn-primary mt-2">'
        + buttonsLabel['id'][ !!storedConf.id ? 'ok' : 'non' ] + '</button>'
      + ' <button id="nalytimk-menu-ip" type="button" class="btn btn-primary mt-2">'
        + buttonsLabel['ip'][ storedConf.ip ? 'ok' : 'non' ] + '</button>'
      + ' <button id="nalytimk-menu-close" class="btn btn-secondary mt-2">Fermer</button>'
  div.appendChild(menu)
  container.appendChild(div)
  document.getElementsByTagName('body')[0].appendChild(container)

  document.getElementById('nalytimk-menu-id').onclick = e =>
    handleButtonClick(e.target, 'id')
  document.getElementById('nalytimk-menu-ip').onclick = e =>
    handleButtonClick(e.target, 'ip')
  document.getElementById('nalytimk-menu-close').onclick = e => {
    updateStoredConf({
      ...getStoredConf(),
      read: true
    })
    div.remove()
  }
}
sendEntry()
window.dispatchEvent(new Event('nalytimk-up'))