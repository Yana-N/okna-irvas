const modals = () => {

	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll('[data-modal]'),
			scroll = calcScroll()

		function closeModal() {
			windows.forEach(item => item.style.display = 'none')

			modal.style.display = 'none'
			document.body.style.overflow = 'auto'
			document.body.style.marginRight = '0px'
		}

		function openModal() {
			modal.style.display = 'block'
			document.body.style.overflow = 'hidden'
			document.body.style.marginRight = `${scroll}px`
		}

		trigger.forEach(el => {
			el.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault()
				}

				windows.forEach(item => item.style.display = 'none')

				openModal()
			})
		})

		close.addEventListener('click', () => closeModal())
		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeClickOverlay) {
				closeModal()
			}
		})
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			document.querySelector(selector).style.display = 'block'
		}, time)
	}

	function calcScroll() {
		let div = document.createElement('div')

		div.style.cssText = 'width: 50px; height: 50px; overflow-Y: scroll; visibility: hidden;'
		document.body.appendChild(div)

		let scrollWidth = div.offsetWidth - div.clientWidth
		div.remove()

		return scrollWidth
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
	bindModal('.phone_link', '.popup', '.popup .popup_close')
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close')
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false)
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false)
	// showModalByTime('.popup', 60000)
}

export default modals