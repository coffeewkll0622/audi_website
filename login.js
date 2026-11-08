function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginMessage = document.getElementById("login-message");
    
    if (loginMessage) {
        loginMessage.innerHTML = "<p>會員 " + username + "，歡迎回來，您已成功登錄。</p>";
        loginMessage.innerHTML += "<p>10秒鐘後將自動跳轉至首頁，如未自動跳轉，請<a href='index.html'>按此回首頁</a>。</p>";
    }
    
    localStorage.setItem('username', username);
    
    showUserPage(username);
    
    setTimeout(function() {
        window.location.href = "index.html";
    }, 10000);
}

function logout() {
    localStorage.removeItem('username');
    var loginForm = document.getElementById('login-form');
    var userSection = document.getElementById('user-section');
    var logoutButton = document.getElementById('logout-button');

    if (loginForm && userSection) {
        loginForm.classList.remove('hidden');
        userSection.classList.add('hidden');
    }
    
    var loginMessage = document.getElementById("login-message");
    if (loginMessage) {
        loginMessage.innerHTML = '';
    }
    
    updateStatus(null);

    if (logoutButton) {
        logoutButton.remove();
    }
}

function updateStatus(username) {
    const statusElement = document.getElementById('status');
    
    if (statusElement) {
        if (username) {
            statusElement.textContent = `狀態: ${username}會員`;
            statusElement.style.backgroundColor = '#4CAF50';
        } else {
            statusElement.textContent = '訪客';
            statusElement.style.backgroundColor = 'transparent';
        }
    }
}

function showUserPage(username) {
    updateStatus(username);
    var userGreeting = document.getElementById('user-greeting');
    var loginForm = document.getElementById('login-form');
    var userSection = document.getElementById('user-section');
    var existingLogoutButton = document.getElementById('logout-button');

    if (existingLogoutButton) {
        existingLogoutButton.remove();
    }

    if (userGreeting && loginForm && userSection) {
        userGreeting.textContent = `${username} 你好！`;
        loginForm.classList.add('hidden');
        userSection.classList.remove('hidden');
        
        var logoutButton = document.createElement('button');
        logoutButton.textContent = '登出';
        logoutButton.id = 'logout-button';
        logoutButton.onclick = logout;
        userSection.appendChild(logoutButton);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    if (username) {
        showUserPage(username);
    } else {
        updateStatus(null);
    }
});
