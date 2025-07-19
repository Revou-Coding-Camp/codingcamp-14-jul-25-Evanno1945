
showWelcomePopup();

function showWelcomePopup() {
    let userName = prompt("Please enter your name:");
    if (userName != '') {
        document.getElementById('welcome-user').innerHTML = userName;
    }
}

function updateTime() {
    const now = new Date();
    document.getElementById('currentTime').textContent = now.toString();
}
setInterval(updateTime, 1000);
updateTime();

document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('dispNama').textContent = document.getElementById('nama').value;
    document.getElementById('dispTgl').textContent = document.getElementById('tgl').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    document.getElementById('dispGender').textContent = gender ? gender.value : '';
    document.getElementById('dispPesan').textContent = document.getElementById('pesan').value;
});