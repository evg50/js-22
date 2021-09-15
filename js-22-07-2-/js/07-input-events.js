const refs = {
  input: document.querySelector('.js-input'),
  render: document.querySelector('.js-render'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(e) {
  const txt = e.currentTarget.value;
  console.log(txt);
}
