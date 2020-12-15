window.addEventListener(
  'nalytimk-up',
  () => {
    const storedConf = getStoredConf()
    
    const btnId = document.getElementById('rimarok-nalytimk-id')
    btnId.innerHTML = buttonsLabel['id'][storedConf.id ? 'ok' : 'non']
    btnId.onclick = e => handleButtonClick(e.target, 'id')
    btnId.removeAttribute('disabled')
    
    const btnIP = document.getElementById('rimarok-nalytimk-ip')
    btnIP.innerHTML = buttonsLabel['ip'][storedConf.ip ? 'ok' : 'non']
    btnIP.onclick = e => handleButtonClick(e.target, 'ip')
    btnIP.removeAttribute('disabled')
  })