// Mega Menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuTriggers = document.querySelectorAll('.mega-menu__trigger');
    
    menuTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const menuId = this.getAttribute('data-menu');
            const dropdown = document.getElementById(menuId);
            
            // Close all other dropdowns
            document.querySelectorAll('.mega-menu__dropdown').forEach(menu => {
                if (menu.id !== menuId) {
                    menu.classList.remove('active');
                }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('active');
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.mega-menu__item')) {
            document.querySelectorAll('.mega-menu__dropdown').forEach(menu => {
                menu.classList.remove('active');
            });
        }
    });
});