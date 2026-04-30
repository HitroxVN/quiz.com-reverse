(async function () {
    const quizMatch = window.location.pathname.match(/\/play\/([a-f0-9-]+)/);
    if (!quizMatch) {
        console.log('Không tìm thấy quiz ID');
        return;
    }

    const quizId = quizMatch[1];
    const apiUrl = `https://quiz.com/api/quiz/${quizId}/`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data && data.slides) {
            console.clear();
            console.log(`%cTổng số câu: ${data.slides.length}`, 'color: yellow; font-size: 14px');

            data.slides.forEach((slide, index) => {
                if (!slide.question) return;

                const questionText = slide.question.replace(/<[^>]*>?/gm, '').trim();
                const answers = slide.answers;
                const type = slide.type;
                if (type === 'Pinpoint' || type === 'Location') return;

                console.log(`%cCÂU ${index + 1}: ${questionText}`, 'color: #ffaa00; font-size: 14px; font-weight: bold');

                if (answers == null || answers.length == 0) {
                    console.log('%c[Không có đáp án]', 'color: gray');
                } else {
                    const correctAnswers = answers.filter(a => a.isCorrect === true);

                    if (correctAnswers.length === 0) {
                        console.log('%c[Không có đáp án đúng]', 'color: red');
                    } else {
                        console.log(`%cĐáp án đúng:`, 'color: #00ff00; font-weight: bold');
                        correctAnswers.forEach((ca, i) => {
                            let displayText = ca.text;
                            console.log(`%c${correctAnswers.length > 1 ? (i + 1) + '. ' : ''}${displayText}`, 'color: #00ff00');
                        });
                    }
                }
                console.log('');
            });
        } else {
            console.log('Không thể lấy dữ liệu quiz');
        }
    } catch (error) {
        console.error('Lỗi:', error);
    }
})();