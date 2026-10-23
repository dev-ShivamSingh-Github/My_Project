const detail = document.querySelectorAll('details');
detail.forEach(d => {
    d.addEventListener("toggle", () => {
        if (d.open) {
            detail.forEach(det => {
                if (det.id !== d.id) {
                    det.open = false;
                }
            });
        }
    });
});