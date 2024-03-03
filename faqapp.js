const tabs = document.querySelectorAll('.chakra-tabs__tab');
const panels = document.querySelectorAll('.chakra-tabs__tab-panel');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Deactivate all tabs
    tabs.forEach(innerTab => {
      innerTab.setAttribute('aria-selected', 'false');
      innerTab.setAttribute('tabindex', '-1');
    });

    // Hide all panels
    panels.forEach(panel => {
      panel.hidden = true;
    });

    // Activate the clicked tab
    tab.setAttribute('aria-selected', 'true');
    tab.setAttribute('tabindex', '0');

    // Show the associated panel
    const controlledPanel = document.getElementById(tab.getAttribute('aria-controls'));
    controlledPanel.hidden = false;
  });
});
