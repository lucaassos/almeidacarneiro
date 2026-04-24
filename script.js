document.addEventListener('DOMContentLoaded', () => {
    // Inicialização de Ícones Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Inicialização de Animações AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            duration: 1000,
            offset: 150,
            easing: 'ease-out-expo'
        });
    }

    // Controle da Navbar durante o scroll
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Scroll Suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Compensa a altura da navbar
                    behavior: 'smooth'
                });
            }
        });
    });
});
