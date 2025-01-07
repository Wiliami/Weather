if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition()
    const inputCity = document.getElementById('enter')

    recognition.continuous = false
    recognition.lang = 'pt-BR'

    recognition.onstart = function() {
        console.log('O reconhecimento de fala foi iniciado.')
    }

    recognition.onresult = function(event) {
        const result = event.results[0][0].transcript
        const firstWord = result.replace(/[\s.]+/g, ' ').split(' ')[0]
        inputCity.value = firstWord

        // Simulation of pressing the "Enter" key when the word is recognized
        simulateEnterKeyPress()
    }

    recognition.onerror = function(event) {
        alert('Erro no reconhecimnento de fala! Tente novamente!')
    }

    recognition.onend = function() {
        console.log('Reconhecimnento de fala terminou.')
    }

    function startSpeechRecognition() {
        recognition.start()
    }

    // Function to simulate pressing the "Enter" key
    function simulateEnterKeyPress() {
        const enterKeyEvent = new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            keyCode: 13,
            which: 13,
            charCode: 13,
        })

        inputCity.dispatchEvent(enterKeyEvent)
    }

    const speakBtn = document.getElementById('speakBtn')
    speakBtn.addEventListener('click', startSpeechRecognition)
} else {
    alert('Seu navegador não oferece suporte ao reconhecimento de fala.')
}
