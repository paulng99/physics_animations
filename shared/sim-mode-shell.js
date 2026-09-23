/**
 * Physics Animations — mode tip + locked-control shell (UI/UX knife 2 · E)
 * Shell copy only; does not alter simulation physics.
 *
 * Usage:
 *   PhysicsSimShell.setModeTip(el, text);
 *   PhysicsSimShell.lockControl(blockOrInput, { locked, reason });
 *   PhysicsSimShell.unlockControl(blockOrInput);
 */
(function (global) {
  'use strict';

  function resolveBlock(el) {
    if (!el) return null;
    if (el.classList && el.classList.contains('sim-control-block')) return el;
    return el.closest ? el.closest('.sim-control-block') : null;
  }

  function ensureReasonEl(block) {
    var reason = block.querySelector('.sim-lock-reason');
    if (!reason) {
      reason = document.createElement('p');
      reason.className = 'sim-lock-reason';
      reason.hidden = true;
      reason.setAttribute('role', 'note');
      block.appendChild(reason);
    }
    return reason;
  }

  function setModeTip(el, text) {
    if (!el) return;
    el.classList.add('sim-mode-tip');
    var value = text == null ? '' : String(text);
    el.textContent = value;
    if (value) {
      el.removeAttribute('hidden');
      el.classList.remove('is-empty');
    } else {
      el.setAttribute('hidden', '');
      el.classList.add('is-empty');
    }
  }

  /**
   * @param {Element} blockOrInput - .sim-control-block or an input inside one
   * @param {{ locked?: boolean, reason?: string }} opts
   */
  function lockControl(blockOrInput, opts) {
    opts = opts || {};
    var locked = !!opts.locked;
    var reason = opts.reason == null ? '' : String(opts.reason);
    var block = resolveBlock(blockOrInput);
    if (!block) {
      // Fallback: treat the element itself as the host
      block = blockOrInput;
      if (block && block.classList) block.classList.add('sim-control-block');
    }
    if (!block) return;

    var input = block.matches && block.matches('input, select, textarea, button')
      ? block
      : block.querySelector('input, select, textarea, button');

    block.classList.toggle('sim-control--locked', locked);
    block.setAttribute('data-locked', locked ? 'true' : 'false');

    if (input) {
      input.disabled = locked;
      input.setAttribute('aria-disabled', locked ? 'true' : 'false');
      if (locked) {
        input.setAttribute('tabindex', '-1');
      } else {
        input.removeAttribute('tabindex');
      }
    }

    var reasonEl = ensureReasonEl(block);
    if (locked && reason) {
      reasonEl.textContent = reason;
      reasonEl.hidden = false;
    } else {
      reasonEl.textContent = '';
      reasonEl.hidden = true;
    }
  }

  function unlockControl(blockOrInput) {
    lockControl(blockOrInput, { locked: false, reason: '' });
  }

  global.PhysicsSimShell = {
    setModeTip: setModeTip,
    lockControl: lockControl,
    unlockControl: unlockControl
  };
})(typeof window !== 'undefined' ? window : this);
