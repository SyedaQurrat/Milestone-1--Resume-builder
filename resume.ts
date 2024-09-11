// Function to handle file input and preview image
document.getElementById('fileInput')?.addEventListener('change', function(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e: ProgressEvent<FileReader>) {
            const previewDiv = document.getElementById('imagePreview') as HTMLDivElement;
            if (previewDiv) {
                // Set the uploaded image as background
                previewDiv.style.backgroundImage = `url('${e.target?.result}')`;
                previewDiv.style.backgroundSize = 'cover';
                previewDiv.style.backgroundPosition = 'center';
                
                // Clear the text "This will remove any inner text or elements"
                previewDiv.innerHTML = "";
            }
        };
        reader.readAsDataURL(file);
    }
});
