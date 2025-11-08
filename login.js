// login.js
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('passwordInput');

togglePassword.addEventListener('click', function() {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-eye-slash');
    icon.classList.toggle('fa-eye');
});

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});