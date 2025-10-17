/* Placeholder for interactive behaviours.
 * The site is intentionally lightweight; there is no external dependency.
 * Future enhancements could include theme toggling or client-side
 * hydration of charts. Currently this file simply exposes a function
 * that toggles between light and dark themes by toggling a CSS class on
 * the HTML element. A button could be wired up to call this function.
 */
function toggleTheme() {
  document.documentElement.classList.toggle('dark-theme');
}
