function openEditModal(id, title) {
  document.getElementById('editModal').style.display = 'flex';
  document.getElementById('editTitle').value = title;
  document.getElementById('editForm').action = '/edit-task/' + id + '?_method=PUT';
}

function closeEditModal() {
  document.getElementById('editModal').style.display = 'none';
}