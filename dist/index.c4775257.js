// excute script after page load
window.onload = function() {
    const toggle = document.querySelector("#nav .toggle-btn");
    const collapse = document.querySelector("#nav .collapse");
    toggle.addEventListener("pointerdown", function(e) {
        collapse.classList.toggle("active");
    });
};

//# sourceMappingURL=index.c4775257.js.map
