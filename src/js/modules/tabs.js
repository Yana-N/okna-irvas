const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {

	const header = document.querySelector(headerSelector),
		tab = document.querySelectorAll(tabSelector),
		content = document.querySelectorAll(contentSelector)

	const hideTabContent = () => {
		tab.forEach(el => {
			el.classList.remove(activeClass)
		})

		content.forEach(el => {
			el.style.display = 'none'
		})
	}

	const showTabContent = (i = 0) => {
		tab[i].classList.add(activeClass)
		content[i].style.display = display
	}

	hideTabContent()
	showTabContent()

	header.addEventListener('click', (e) => {
		const target = e.target
		const tabClass = tabSelector.replace(/\./, '')

		if (target && (target.classList.contains(tabClass)
			|| target.parentNode.classList.contains(tabClass))) {

			tab.forEach((el, i) => {
				if (target === el || target.parentNode === el) {
					hideTabContent()
					showTabContent(i)
				}
			})
		}
	})


}

export default tabs