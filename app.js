

window.addEventListener('load', function () {
const btn = document.getElementById('wrapper');
console.log(wrapper);
wrapper.addEventListener("click", popUp) 
const form = document.getElementById("hidden-form");

console.log(form)
function popUp() {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    form.style.display="flex";
}

  })
  function sendData(){
    alert('fff')
}
