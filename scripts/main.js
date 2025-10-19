// Sarcastic responses database
const sarcasticResponses = [
    "Oh, another profound question. Let me consult my crystal ball... Nope, still seeing the same answer: figure it out yourself.",
    "Wow, what a groundbreaking inquiry. I'm sure nobody's ever pondered that before. The answer is: maybe, maybe not.",
    "The almighty has spoken: Have you tried Googling it? Revolutionary concept, I know.",
    "Ah yes, because the secrets of the universe are definitely stored on this random website. The answer is 42. Or was it 43? I forget.",
    "Let me get this straight—you're asking the internet for wisdom? Bold strategy. The answer is: you're asking the wrong questions.",
    "The almighty is busy right now, but I can tell you this: life is full of mysteries, and this question isn't one of them.",
    "Fascinating. The answer you seek is hidden in the ancient texts... also known as Wikipedia.",
    "Oh, the irony of seeking profound answers from a search bar labeled 'questions for the almighty.' The answer is: yes, no, and maybe all at once.",
    "Let me channel my inner oracle... *dramatic pause*... The answer is disappointingly mundane, much like this question.",
    "The almighty decrees: stop overthinking it. Or don't. Free will and all that jazz.",
    "Congratulations! You've unlocked the achievement: 'Asked a Question That Broke the Sarcasm Generator.' The answer is: try again.",
    "Well, well, well. Another seeker of truth. The answer is simple: life is complicated, but your question isn't.",
    "The almighty says: 'Have you considered the possibility that some questions don't need answers?'",
    "Ah, a philosophical inquiry! Or is it? Either way, the answer is: it depends. On everything. Always.",
    "The universe whispers: 'You already know the answer.' (Spoiler: you probably don't, but it sounds wise.)",
    "Let me consult the cosmic wisdom database... Error 404: Common sense not found.",
    "The almighty is impressed by your curiosity but not by your phrasing. The answer is: work on your communication skills.",
    "Here's the thing about asking the almighty questions: sometimes the answer is just 'because reasons.'",
    "Plot twist: the real answer was the friends we made along the way. Just kidding, there's no answer.",
    "The almighty decrees: if you have to ask, you'll never know. If you know, you need only ask. Confused? Good."
];

// Newsletter form handler
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = document.getElementById('emailInput');
            const subscribeMessage = document.getElementById('subscribeMessage');
            const email = emailInput.value;
            
            if (email && isValidEmail(email)) {
                // Store the email (in a real app, this would send to a server)
                localStorage.setItem('newsletter_email', email);
                
                // Show success message
                subscribeMessage.textContent = '🎉 Success! You\'ve been added to our bi-weekly newsletter. Prepare for sarcastic wisdom!';
                subscribeMessage.style.color = '#fff';
                
                // Clear the input
                emailInput.value = '';
                
                // Reset message after 5 seconds
                setTimeout(() => {
                    subscribeMessage.textContent = '';
                }, 5000);
            } else {
                subscribeMessage.textContent = '❌ Please enter a valid email address.';
                subscribeMessage.style.color = '#fff';
            }
        });
    }
});

// Question handler for "Questions for the Almighty"
function askAlmighty() {
    const questionInput = document.getElementById('almightyQuestion');
    const answerContainer = document.getElementById('almightyAnswer');
    const question = questionInput.value.trim();
    
    if (!question) {
        answerContainer.textContent = '😏 The almighty requires an actual question. Silence is golden, but not very informative.';
        answerContainer.classList.add('show');
        return;
    }
    
    // Get a random sarcastic response
    const randomIndex = Math.floor(Math.random() * sarcasticResponses.length);
    const response = sarcasticResponses[randomIndex];
    
    // Display the response with animation
    answerContainer.textContent = `❝ ${response} ❞`;
    answerContainer.classList.add('show');
    
    // Store the Q&A (in a real app, this could be sent to a server)
    const timestamp = new Date().toISOString();
    const qa = {
        question: question,
        answer: response,
        timestamp: timestamp
    };
    
    // Store in localStorage (limited storage, but works for demo)
    let qaHistory = JSON.parse(localStorage.getItem('qa_history') || '[]');
    qaHistory.push(qa);
    // Keep only last 50 Q&As
    if (qaHistory.length > 50) {
        qaHistory = qaHistory.slice(-50);
    }
    localStorage.setItem('qa_history', JSON.stringify(qaHistory));
    
    // Clear the input
    questionInput.value = '';
}

// Allow Enter key to submit question
document.addEventListener('DOMContentLoaded', function() {
    const questionInput = document.getElementById('almightyQuestion');
    
    if (questionInput) {
        questionInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                askAlmighty();
            }
        });
    }
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add some fun console messages
console.log('%c🎭 Welcome to Justgiviner! ', 'font-size: 20px; font-weight: bold; color: #3498db;');
console.log('%cLooking for answers? Try asking the almighty... if you dare! 😏', 'font-size: 14px; color: #2c3e50;');
