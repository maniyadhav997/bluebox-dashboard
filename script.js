// Chart Implementation
const ctx = document.getElementById('performanceChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Monthly Performance',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: '#3498db',
            tension: 0.4,
            fill: false
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});

// Table Data Population
const tableData = [
    {name: 'Mike Elmers', email: '', unit: 'ACRYO', joined: '25 Apr. 2018'},
    {name: 'Amanda O’Hazel', email: 'info@yuzamail.com', unit: 'Editor', joined: ''},
    {name: 'Ruan Kippentree', email: '(rollAscitem+Qlemnik.com)', unit: 'Sukamoto', joined: '25 Apr. 2018'},
    {name: '', email: '(riskManageDemulsion)', unit: 'Ajdana', joined: '25 Apr. 2018'},
    {name: 'Kevin Robertson', email: 'kippentree@bmak.com', unit: '', joined: '25 Apr. 2018'}
];

const tbody = document.querySelector('.data-table tbody');

tableData.forEach(item => {
    const tr = document.createElement('tr');

    // Check if any field is empty
    const isIncomplete = !item.name.trim() || !item.email.trim() || !item.unit.trim() || !item.joined.trim();
    const statusClass = isIncomplete ? 'status-incomplete' : 'status-active';
    const statusText = isIncomplete ? 'Incomplete' : 'Active';

    tr.innerHTML = `
        <td class="${item.name.trim() === '' ? 'invalid-cell' : ''}">${item.name || 'N/A'}</td>
        <td class="${item.email.trim() === '' ? 'invalid-cell' : ''}">${item.email || 'N/A'}</td>
        <td class="${item.unit.trim() === '' ? 'invalid-cell' : ''}">${item.unit || 'N/A'}</td>
        <td class="${item.joined.trim() === '' ? 'invalid-cell' : ''}">${item.joined || 'N/A'}</td>
        <td><span class="status-badge ${statusClass}">${statusText}</span></td>
    `;

    tbody.appendChild(tr);
});
