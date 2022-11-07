let today = new Date();
let options = {
	weekday: 'long',
	day: 'numeric',
	month: 'long',
};
let day = today.toLocaleDateString('it-IT', options);
let dayCorrect = day.at(0).toUpperCase() + day.slice(1);
$('div h1').text(dayCorrect);

$('#aggiungi').click((e) => {
	let form = $('#formItem');
	if (form[0].checkValidity()) {
		e.preventDefault();
		let valoreItem = $('#nota').val();
		let numeroItem = $('.elenco').length;
		$('.elenco').last()
			.after(`<label class="list-group-item d-flex gap-2 elenco numero-${numeroItem}">
		<input class="form-check-input flex-shrink-0" type="checkbox" value="">
		<p>
			${valoreItem}
		</p>
		<button class="button elimina elimina-${numeroItem}" type="submit" name="button">-</button>
	</label>`);

		$('#nota').val('');

		let pulsante = '.elimina-' + numeroItem;
		$(pulsante).click((e) => {
			e.preventDefault();
			let classeElim = '.numero-' + numeroItem;
			$(classeElim).remove();
		});
	}
});
