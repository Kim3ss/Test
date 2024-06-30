function showComplainForm() {
    var form = document.getElementById('complain-form');
    form.style.display = 'block';
}
document.getElementById('complainForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const studentNumber = document.getElementById('studentNumber').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const complaint = document.getElementById('complaint').value;

    const complaints = JSON.parse(localStorage.getItem('complaints')) || [];
    complaints.push({ studentNumber, name, email, department, complaint });
    localStorage.setItem('complaints', JSON.stringify(complaints));

    alert('Complaint submitted successfully!');
    document.getElementById('complainForm').reset();
});
