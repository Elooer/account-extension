document.getElementById('list').onclick = function (e) {
  navigator.clipboard.writeText(e.target.innerHTML)
}