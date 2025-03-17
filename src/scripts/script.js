document.addEventListener('DOMContentLoaded', () => {
	console.log('GitHub nickname:', 'VadimNest');

	const form = document.querySelector('.form-page__content');

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		const nameInput = form.querySelector('#name');
		const nameValue = nameInput.value;

		if (nameValue) {
			console.log('Форма отправлена. Введенное имя:', nameValue);
		} else {
			console.log('Поле имени пустое!');
		}

		form.reset();
	});
});
