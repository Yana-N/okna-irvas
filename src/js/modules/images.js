const images = () => {
	const imagePopup = document.createElement('div'),
		workSection = document.querySelector('.works'),
		bigImage = document.createElement('img')

	imagePopup.classList.add('popup')
	workSection.appendChild(imagePopup)
	imagePopup.appendChild(bigImage)

	imagePopup.style.cssText = 'display: none; justify-content: center; align-items: center;'
	bigImage.style.maxWidth = '100%'

	workSection.addEventListener('click', (e) => {
		e.preventDefault()

		let target = e.target

		if (target && target.classList.contains('preview')) {
			imagePopup.style.display = 'flex'

			let path = target.parentNode.getAttribute('href')
			bigImage.setAttribute('src', path)

			document.body.style.overflow = 'hidden'
		}

		if (target && target.matches('div.popup')) {
			imagePopup.style.display = 'none'
			document.body.style.overflow = 'auto'
		}
	})
}

export default images