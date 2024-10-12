// Pass in the id of the element you'd like to reveal
const ddRemoveHidden = function dropdownRemoveHidden(id) {
  const targetEl = document.querySelector(`#${id}`);
  targetEl.removeAttribute('hidden');
};

// Pass in the id of the element you'd like set as hidden
const ddSetHidden = function dropdownSetHidden(id) {
  const targetEl = document.querySelector(`#${id}`);
  targetEl.setAttribute('hidden', true);
};

// Assumes parent element with child element inside.
// When pointer hovers over the parent element the child is revealed.
// When pointer leaves either the parent or child the child is hidden.
export default function ddInitialize(parentId, childId, method = 'hover') {
  const mode = method === 'hover' ? 'pointerover' : 'click';
  const parentEl = document.querySelector(`#${parentId}`);
  const childEl = document.querySelector(`#${childId}`);
  parentEl.style.position = 'relative';
  childEl.style.position = 'absolute';
  childEl.setAttribute('hidden', true);
  parentEl.addEventListener(mode, () => {
    ddRemoveHidden(childId);
  });
  parentEl.addEventListener('pointerleave', () => {
    ddSetHidden(childId);
  });
  childEl.addEventListener('pointerleave', () => {
    ddSetHidden(childId);
  });
}
