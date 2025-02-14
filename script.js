let selectedPiece = null;

document.querySelectorAll('.piece').forEach(piece => {
    piece.addEventListener('click', () => {
        if (selectedPiece === piece) {
            selectedPiece.classList.remove('selected-animation');
            selectedPiece = null;
            clearHighlights();
        } else {
            resetSelection();
            selectedPiece = piece;
            highlightDropZones();
            piece.classList.add('selected-animation');
        }
    });
});

document.querySelectorAll('.drop-zone').forEach(zone => {
    zone.addEventListener('click', () => {
        if (selectedPiece && !zone.hasChildNodes()) {
            zone.appendChild(selectedPiece);
            selectedPiece.style.position = 'relative';
            selectedPiece.style.top = '0';
            selectedPiece.style.left = '0';
            selectedPiece.classList.remove('selected-animation');
            selectedPiece = null;
            clearHighlights();
            checkCompletion();
        }
    });
});

function highlightDropZones() {
    document.querySelectorAll('.drop-zone').forEach(zone => {
        if (!zone.hasChildNodes()) {
            zone.classList.add('highlight-zone');
        }
    });
}

function clearHighlights() {
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.classList.remove('highlight-zone');
    });
}

function resetSelection() {
    document.querySelectorAll('.piece').forEach(piece => {
        piece.classList.remove('selected-animation');
    });
}
function checkCompletion() {
    let zone1 = document.getElementById('zone1').firstChild?.id;
    let zone2 = document.getElementById('zone2').firstChild?.id;

    if (zone1 === 'piece1' && zone2 === 'piece2') {
        let piece1 = document.getElementById('piece1');
        let piece2 = document.getElementById('piece2');

        piece1.style.transition = 'transform 0.8s ease-in-out';
        piece2.style.transition = 'transform 0.8s ease-in-out';
        piece1.style.transform = 'translateX(15px)';
        piece2.style.transform = 'translateX(-25px)';

        setTimeout(() => {
            document.body.classList.add('fade-background');
            
            setTimeout(() => {
                document.querySelectorAll('.piece, .drop-zone, h1').forEach(el => {
                    el.style.opacity = '0';
                    el.style.transition = 'opacity 0.8s ease-in-out';
                });

                setTimeout(() => {
                    showFinalScreen();
                }, 800);
            }, 500);
        }, 700);
    }
}

function showFinalScreen() {
    let finalScreen = document.createElement('div');
    finalScreen.id = 'final-screen';
    finalScreen.innerHTML = `
        <img id="full-heart" src="https://cdn-icons-png.flaticon.com/512/833/833472.png" alt="Heart">
        <p id="love-message">Ты - моё сердце ❤️</p>

    `;

    document.body.appendChild(finalScreen);

    setTimeout(() => {
        finalScreen.classList.add('show');
    }, 100);

}




