// Dashboard Interactive Elements

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Sidebar Toggle
    const sidebar = document.getElementById('sidebar');
    const sidebarToggleBtn = document.getElementById('sidebar-toggle');
    const sidebarCloseBtn = document.getElementById('sidebar-close');

    if (sidebarToggleBtn && sidebar) {
        sidebarToggleBtn.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
    }

    if (sidebarCloseBtn && sidebar) {
        sidebarCloseBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }

    // Status Toggle (Online/Offline)
    const statusCheckbox = document.getElementById('status-checkbox');
    const statusText = document.getElementById('status-text');

    if (statusCheckbox && statusText) {
        statusCheckbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                statusText.textContent = 'Online';
                statusText.classList.add('online');
                // Optional: Inform Supabase that the worker is online
                console.log("Worker status changed to Online");
            } else {
                statusText.textContent = 'Offline';
                statusText.classList.remove('online');
                // Optional: Inform Supabase that the worker is offline
                console.log("Worker status changed to Offline");
            }
        });
    }
});
