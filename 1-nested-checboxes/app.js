const parentCheckboxes = document.querySelectorAll('.parent-checkbox');
const childCheckboxes = document.querySelectorAll('.child-checkbox');

Array.from(parentCheckboxes).forEach((parent) => {
  parent.addEventListener('click', () => {
    if(parent.checked) {
      Array.from(childCheckboxes).forEach((child) => {
        if(child.getAttribute('data-parent') === parent.getAttribute('id')) {
          child.checked = true;
        }
      })
    } else {
      Array.from(childCheckboxes).forEach((child) => {
        if(child.getAttribute('data-parent') === parent.getAttribute('id')) {
          child.checked = false;
        }
      })
    }
  })
});


Array.from(childCheckboxes).forEach((child) => {
  child.addEventListener('click', () => {
    const parentId = child.getAttribute('data-parent');
    const parentCheckbox = document.getElementById(parentId);
    const siblingCheckboxes = document.querySelectorAll(`[data-parent=${child.getAttribute('data-parent')}]`);
    const isEverySiblingChecked = Array.from(siblingCheckboxes).every((sibling) => sibling.checked);
    if(isEverySiblingChecked) {
      // check the parent checkbox
      parentCheckbox.checked = true;
    } else {
      parentCheckbox.checked = false;
    }
  });
});