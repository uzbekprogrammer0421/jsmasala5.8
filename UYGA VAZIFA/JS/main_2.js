const create = (e) => {
    e.preventDefault();
    const file = fileInput.files[0];
    const fileSizeInKB = parseInt(file.size / 1024);
    document.getElementById('fileSize').textContent = `Fayl hajmi: ${fileSizeInKB.toFixed(2)} KB`;
    alert(fileSizeInKB + "kb")
}