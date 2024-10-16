const logButton = document.getElementById('logButton');
const logDisplay = document.getElementById('logDisplay');
const totalLogs = document.getElementById('totalLogs');
let logs = [];

logButton.addEventListener('click', () => {
    const logEntry = `Log entry at ${new Date().toLocaleString()}`;
    logs.push(logEntry);
    updateLogDisplay();
});

function updateLogDisplay() {
    logDisplay.innerHTML = logs.map(log => `<p>${log}</p>`).join('');
    totalLogs.innerHTML = `Total Logs: ${logs.length}`;
}
