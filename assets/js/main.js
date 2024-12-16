document.addEventListener('DOMContentLoaded', () => {
    // Verwijder welcome screen na animatie
    setTimeout(() => {
        const welcomeScreen = document.querySelector('.welcome-screen');
        welcomeScreen.style.display = 'none';
    }, 3000);

    // Voeg hover effect toe aan skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}); 