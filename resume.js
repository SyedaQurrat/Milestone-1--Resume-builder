"use strict";
var _a;
// Function to handle file input and preview image
(_a = document.getElementById('fileInput')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', function (event) {
    var _a;
    const input = event.target;
    const file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            const previewDiv = document.getElementById('imagePreview');
            if (previewDiv) {
                // Set the uploaded image as background
                previewDiv.style.backgroundImage = `url('${(_a = e.target) === null || _a === void 0 ? void 0 : _a.result}')`;
                previewDiv.style.backgroundSize = 'cover';
                previewDiv.style.backgroundPosition = 'center';
                // Clear the text "This will remove any inner text or elements"
                previewDiv.innerHTML = "";
            }
        };
        reader.readAsDataURL(file);
    }
});
