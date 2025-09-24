// admin.js - Fetch and display user complaints
// Replace this with actual API call to your backend

document.addEventListener('DOMContentLoaded', function() {
  // Example data; replace with fetch('/api/complaints') in production
  const complaints = [
    {
      image: 'WhatsApp Image 2025-09-12 at 21.43.38_040556dc.jpg',
      department: 'Traffic Department',
      description: 'issue in hyd',
      location: 'Ramnaresh Colony, Ward 123 Hydernagar, Greater Hyderabad Municipal Corporation',
      date: '2025-09-24'
    },
    // Add more complaints here or fetch from backend
  ];

  const tbody = document.getElementById('complaintsBody');
  complaints.forEach(c => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${c.image}" class="complaint-img" alt="Complaint Image"></td>
      <td>${c.department}</td>
      <td>${c.description}</td>
      <td>${c.location}</td>
      <td>${c.date}</td>
    `;
    tbody.appendChild(tr);
  });
});
