document.addEventListener('DOMContentLoaded', () => {
	console.log('GitHub nickname:', 'VadimNest');

	const form = document.querySelector('.form-page__content');
	const submitButton = form.querySelector('.form-page__submit-button');
	const nameInput = form.querySelector('#name');

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		submitButton.removeAttribute('data-success');
		nameInput.removeAttribute('data-error');

		const nameValue = nameInput.value.trim();

		if (nameValue) {
			console.log('Форма отправлена. Введенное имя:', nameValue);
			submitButton.setAttribute('data-success', '');
		} else {
			console.log('Поле имени пустое!');
			nameInput.setAttribute('data-error', '');
		}

		form.reset();
	});
});
