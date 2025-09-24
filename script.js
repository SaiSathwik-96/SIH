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

	// Redirect to admin.html on admin login
	var adminLoginForm = document.getElementById('adminLoginForm');
	if (adminLoginForm) {
		adminLoginForm.onsubmit = function(e) {
			e.preventDefault();
			window.location.href = 'admin.html';
		};
	}

	// Navigate to report.html when Report an Issue button is clicked
	var reportIssueBtn = document.getElementById('reportIssueBtn');
	if (reportIssueBtn) {
		reportIssueBtn.onclick = function() {
			window.location.href = 'report.html';
		};
	}

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
