window.onload = function() {
	const headerUserLogin = document.getElementById('headerUserLogin');
	const headerAdminLogin = document.getElementById('headerAdminLogin');
	const overlay = document.getElementById('overlay');
	const userLoginCard = document.getElementById('userLoginCard');
	const adminLoginCard = document.getElementById('adminLoginCard');
	const themeToggleBtn = document.getElementById('themeToggleBtn');

	headerUserLogin.onclick = function() {
		overlay.style.display = 'flex';
		userLoginCard.style.display = 'flex';
		adminLoginCard.style.display = 'none';
	};
	headerAdminLogin.onclick = function() {
		overlay.style.display = 'flex';
		userLoginCard.style.display = 'none';
		adminLoginCard.style.display = 'flex';
	};

	overlay.onclick = function(e) {
		if (e.target === overlay) {
			overlay.style.display = 'none';
			userLoginCard.style.display = 'none';
			adminLoginCard.style.display = 'none';
		}
	};

	// Theme toggle logic
	themeToggleBtn.onclick = function() {
		const body = document.body;
		if (body.classList.contains('dark-mode')) {
			body.classList.remove('dark-mode');
			themeToggleBtn.textContent = '🌙';
		} else {
			body.classList.add('dark-mode');
			themeToggleBtn.textContent = '☀️';
		}
	};
};
