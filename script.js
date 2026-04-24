document.addEventListener('DOMContentLoaded', () => {
    // Inicialização de Ícones
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Inicialização de Animações Scroll
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            duration: 1000,
            offset: 150,
            easing: 'ease-out-expo'
        });
    }

    // Header Dinâmico
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Scroll Suave para Links Internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Compensação da altura da navbar
                    behavior: 'smooth'
                });
            }
        });
    });
});
