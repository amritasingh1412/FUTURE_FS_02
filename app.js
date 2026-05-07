document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.getElementById('leadForm');
    const leadList = document.getElementById('leadList');

    // Check if form exists
    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get values from inputs
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const status = document.getElementById('status').value;

            // Create new row
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${name}</td>
                <td>${email}</td>
                <td><span class="status-label">${status}</span></td>
                <td><button class="delete-btn">DELETE</button></td>
            `;

            // Add delete event to the new button
            row.querySelector('.delete-btn').addEventListener('click', () => {
                row.remove();
            });

            // Append to table
            leadList.appendChild(row);

            // Reset form
            leadForm.reset();
            console.log("Lead Added Successfully: " + name);
        });
    } else {
        console.error("Error: leadForm not found in HTML!");
    }
});