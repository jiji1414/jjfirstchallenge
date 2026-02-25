document.addEventListener("DOMContentLoaded", () => {
    const lottoNumbersContainer = document.querySelector(".lotto-numbers");
    const generateBtn = document.getElementById("generate-btn");
    const themeBtn = document.getElementById("theme-btn");
    const htmlElement = document.documentElement;

    // Theme Logic
    const savedTheme = localStorage.getItem("theme") || "light";
    htmlElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);

    themeBtn.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        
        htmlElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        themeBtn.textContent = theme === "light" ? "🌞" : "🌙";
    }

    // Lotto Logic
    const generateNumbers = () => {
        lottoNumbersContainer.innerHTML = "";
        const numbers = new Set();
        while (numbers.size < 7) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
        const mainNumbers = sortedNumbers.slice(0, 6);
        const bonusNumber = sortedNumbers[6];

        mainNumbers.forEach(number => {
            createBall(number);
        });

        createBall(bonusNumber, true);
    };

    const createBall = (number, isBonus = false) => {
        const ball = document.createElement("div");
        ball.classList.add("lotto-ball");
        if (isBonus) {
            ball.classList.add("bonus");
        }
        ball.textContent = number;
        ball.style.backgroundColor = getBallColor(number);
        lottoNumbersContainer.appendChild(ball);
    };

    const getBallColor = (number) => {
        if (number <= 10) return "#fbc400";
        if (number <= 20) return "#69c8f2";
        if (number <= 30) return "#ff7272";
        if (number <= 40) return "#aaa";
        return "#b0d840";
    };

    generateBtn.addEventListener("click", generateNumbers);

    generateNumbers();
});