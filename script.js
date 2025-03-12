// Pre-loaded study materials for BBA and MBA students
const questions = [
    {
        question: "What is the primary goal of a business?",
        options: ["To maximize shareholder wealth", "To provide employment", "To serve the community", "To innovate"],
        answer: 0
    },
    {
        question: "What is a SWOT analysis used for?",
        options: ["Financial forecasting", "Strategic planning", "Employee evaluation", "Market segmentation"],
        answer: 1
    },
    {
        question: "What does the '4Ps' stand for in marketing?",
        options: ["Product, Price, Place, Promotion", "People, Process, Physical evidence, Promotion", "Planning, Pricing, Positioning, Packaging", "Product, Price, Positioning, Packaging"],
        answer: 0
    },
    {
        question: "What is market segmentation?",
        options: ["Dividing a market into distinct groups of buyers", "Creating a unique selling proposition", "Setting the price of a product", "Promoting a product through various channels"],
        answer: 0
    },
    {
        question: "What is the formula for calculating net profit?",
        options: ["Revenue - Expenses", "Assets - Liabilities", "Gross Profit - Operating Expenses", "Sales - Cost of Goods Sold"],
        answer: 0
    },
    {
        question: "What does ROI stand for?",
        options: ["Return on Investment", "Rate of Interest", "Return on Income", "Revenue Over Investment"],
        answer: 0
    },
    {
        question: "What is the role of a manager?",
        options: ["To plan, organize, lead, and control", "To hire and fire employees", "To manage finances", "To market products"],
        answer: 0
    },
    {
        question: "What is delegation in management?",
        options: ["Assigning tasks to subordinates", "Making decisions alone", "Monitoring employee performance", "Conducting meetings"],
        answer: 0
    },
    {
        question: "What is inflation?",
        options: ["A general increase in prices", "A decrease in the value of money", "An increase in unemployment", "A decrease in economic growth"],
        answer: 0
    },
    {
        question: "What is the law of supply and demand?",
        options: ["As price increases, supply increases and demand decreases", "As price decreases, supply increases and demand decreases", "As price increases, both supply and demand increase", "As price decreases, both supply and demand decrease"],
        answer: 0
    },
    {
        question: "What is a startup?",
        options: ["A new business venture", "A small business", "A franchise", "A non-profit organization"],
        answer: 0
    },
    {
        question: "What is a business model?",
        options: ["A plan for how a business will generate revenue", "A marketing strategy", "A financial forecast", "A product design"],
        answer: 0
    }
];

let currentQuestion = 0; // Tracks the current question
let score = 0;          // Tracks points
let level = 1;          // Tracks level

// Show the current question and options
function displayQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    const options = document.querySelectorAll('.option');
    options.forEach((btn, index) => {
        btn.textContent = q.options[index];
    });
}

// Check if the answer is correct
function checkAnswer(selected) {
    const q = questions[currentQuestion];
    const feedback = document.getElementById('feedback');
    if (selected === q.answer) {
        score += 10;
        feedback.textContent = "Correct! +10 points";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Wrong! Try again.";
        feedback.style.color = "red";
    }
    document.getElementById('score').textContent = `Score: ${score}`;
    checkLevelUp();
    // Move to the next question after a short delay
    setTimeout(() => {
        feedback.textContent = "";
        currentQuestion = (currentQuestion + 1) % questions.length;
        displayQuestion();
    }, 1000);
}

// Check if the player levels up
function checkLevelUp() {
    if (score >= level * 30) {
        level++;
        document.getElementById('level').textContent = `Level: ${level}`;
        alert(`Congrats! You've reached Level ${level}!`);
    }
}

// Start the game
displayQuestion();
