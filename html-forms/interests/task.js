const checkBoxes = Array.from(document.querySelectorAll('.interest__check'));

checkBoxes.forEach((item) => {
    let parentCheck = item.closest('.interest');
    const allInterests = Array.from(parentCheck.querySelectorAll('.interest__check'));

    if (parentCheck.querySelector('.interest')) {
        item.addEventListener('change', () => {
            allInterests.forEach(el => {
                if (item.checked) {
                    el.checked = true;
                } else {
                    el.checked = false;
                }
            });
        });
    }
});
 