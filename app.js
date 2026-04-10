const leadForm = document.getElementById('leadForm');
const leadTableBody = document.getElementById('leadTableBody');

// Add Lead Function
leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const status = document.getElementById('status').value;

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td><strong>${status}</strong></td>
        <td><button class="delete-btn" onclick="this.parentElement.parentElement.remove()">Delete</button></td>
    `;

    leadTableBody.appendChild(row);
    leadForm.reset();
});