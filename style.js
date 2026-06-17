let selectedTrackPipeline = "Standard";

/* --- Over-Spreading AI Sidebar Mechanical Controls --- */
function toggleAISidebar() {
    const aiWidget = document.getElementById('ai-widget');
    const bodyElement = document.body;
    const triggerTab = document.getElementById('ai-sidebar-trigger');
    
    aiWidget.classList.toggle('open');
    bodyElement.classList.toggle('ai-open');
    
    // Hide the toggle tab when open so it stays perfectly clean
    if (aiWidget.classList.contains('open')) {
        triggerTab.style.right = '-50px';
    } else {
        triggerTab.style.right = '0';
    }
}

/* --- Pipeline Track Switcher --- */
function updatePipeline(element, trackValue) {
    const totalButtons = element.parentElement.querySelectorAll('.tab-btn');
    totalButtons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    selectedTrackPipeline = trackValue;

    const allCards = document.querySelectorAll('.pipeline-card');
    allCards.forEach(card => card.style.display = 'none');

    const targetCard = document.getElementById(`track-${trackValue}`);
    if (targetCard) {
        targetCard.style.display = 'block';
        targetCard.style.animation = 'fadeEffect 0.4s ease-in-out';
    }
}

/* --- 20% Loan Engine & Live Calendar Target Generation --- */
function runCalculationEngine() {
    const selectElem = document.getElementById('loanAmount');
    if(!selectElem) return;
    const val = parseInt(selectElem.value);
    const interest = Math.round(val * 0.2);
    const total = val + interest;
    
    document.getElementById('interestDisplay').innerText = interest.toLocaleString();
    document.getElementById('totalDisplay').innerText = total.toLocaleString();
    
    const baseDate = new Date();
    const targetDate = new Date();
    targetDate.setDate(baseDate.getDate() + 30);
    
    const graceLimitDate = new Date();
    graceLimitDate.setDate(targetDate.getDate() + 3);
    
    document.getElementById('targetReturnDate').innerText = targetDate.toLocaleDateString();
    document.getElementById('gracePeriodLimit').innerText = graceLimitDate.toLocaleDateString();
}

/* --- Document Export Engine --- */
function downloadContractDocument() {
    const amountText = document.getElementById('loanAmount').value;
    const interestText = document.getElementById('interestDisplay').innerText;
    const totalText = document.getElementById('totalDisplay').innerText;
    
    const plainText = `LIZKEMI CAPITAL LTD - STRATEGIC AGREEMENT\n` +
                      `Selected Principal Matrix: ${amountText}\n` +
                      `Accrued 20% Interest Calculation: ${interestText}\n` +
                      `Total Repayment Obligation: ${totalText}\n\n` +
                      `Generated under live secure browser token. 3-Day Grace period bounds apply strictly.`;
                      
    const blob = new Blob([plainText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "LizKemi_Loan_Manifest.txt";
    link.click();
}

/* --- Capital Yield Forecast Simulator Matrix Formula & HTML5 Canvas Chart --- */
function runInvestmentEngine() {
    const capitalInput = document.getElementById('investmentCapital');
    const durationInput = document.getElementById('investmentDuration');
    if(!capitalInput || !durationInput) return;

    const capital = parseInt(capitalInput.value);
    const years = parseInt(durationInput.value);
    
    document.getElementById('capitalVal').innerText = '$' + capital.toLocaleString();
    document.getElementById('durationVal').innerText = years + (years === 1 ? ' Year' : ' Years');
    
    const assumedRate = 0.10;
    const projectedYield = Math.round(capital * Math.pow((1 + assumedRate), years));
    
    document.getElementById('matureValuationDisplay').innerText = '$' + projectedYield.toLocaleString();

    // Render HTML5 Trajectory Chart
    drawGrowthChart(capital, assumedRate, years);
}

function drawGrowthChart(principal, rate, periods) {
    const chartCanvas = document.getElementById('growthChart');
    if (!chartCanvas) return;
    const gctx = chartCanvas.getContext('2d');
    
    // Set internal resolution attributes explicitly
    chartCanvas.width = chartCanvas.clientWidth;
    chartCanvas.height = 150;
    
    const w = chartCanvas.width;
    const h = chartCanvas.height;
    gctx.clearRect(0, 0, w, h);
    
    // Generate exponential vector data arrays
    let points = [];
    for (let i = 0; i <= periods; i++) {
        points.push(principal * Math.pow((1 + rate), i));
    }
    
    const maxVal = points[points.length - 1];
    const minVal = points[0];
    
    gctx.beginPath();
    gctx.strokeStyle = '#00f2fe';
    gctx.lineWidth = 3;
    
    for (let i = 0; i < points.length; i++) {
        const xPos = (i / periods) * (w - 40) + 20;
        const yPos = h - ((points[i] / maxVal) * (h - 30) + 10);
        if (i === 0) gctx.moveTo(xPos, yPos);
        else gctx.lineTo(xPos, yPos);
        
        // Draw localized dot highlights
        gctx.fillStyle = '#ffffff';
        gctx.fillRect(xPos - 2, yPos - 2, 4, 4);
    }
    gctx.stroke();
}

/* --- Currency Matrix Conversion Engine --- */
function convertEquityMatrix() {
    const currency = document.getElementById('currencySelector').value;
    
    // Fixed baseline metric scale (1 USD = 22.50 SLE Leones)
    const rate = (currency === "SLL") ? 22.5 : 1;
    const symbol = (currency === "SLL") ? "Le " : "$";

    const data = {
        aInit: 1.00 * rate,
        aCurr: 1.45 * rate,
        bInit: 2.50 * rate,
        bCurr: 3.10 * rate,
        dashCap: 154200.00 * rate,
        dashYld: 12480.00 * rate
    };

    // Update Shares Table values
    document.getElementById('seriesAInit').innerText = symbol + data.aInit.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('seriesACurr').innerText = symbol + data.aCurr.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('seriesBInit').innerText = symbol + data.bInit.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('seriesBCurr').innerText = symbol + data.bCurr.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

    // Update Client Portal values dynamically
    document.getElementById('dashCapital').innerText = symbol + data.dashCap.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('dashYield').innerText = (currency === "SLL" ? "+Le " : "+$") + data.dashYld.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

/* --- Live Simulated System Activity Logs --- */
const logs = [
    "[LEDGER SUCCESS] Loan parameters validated successfully.",
    "[SECURE] 256-Bit transaction pipelines operating nominally.",
    "[INFO] Star map graphics synchronized with parallax layers.",
    "[METRIC] Cohort trade scorecards updated on current frame."
];
function appendLiveLogs() {
    const logBox = document.getElementById("systemLog");
    if(!logBox) return;
    const randomLog = logs[Math.floor(Math.random() * logs.length)];
    logBox.innerHTML = `[SYSTEM INFO] ${new Date().toLocaleTimeString()} - ${randomLog}<br>` + logBox.innerHTML;
}
setInterval(appendLiveLogs, 7000);

/* --- Responsive Floating Chat Assist Logic Engine --- */
function sendMessage(){
    let input = document.getElementById("userInput");
    let chat = document.getElementById("ai-chat");
    if(!input || !chat) return;

    let userText = input.value.trim();
    if(userText === "") return;

    chat.innerHTML += `<div class="user">${userText}</div>`;
    chat.scrollTop = chat.scrollHeight;

    let message = userText.toLowerCase();
    let reply = "Thank you for reaching out to LizKemi Capital Firm. An advisor will review your entry.";

    if(message.includes("loan")){
        reply = "We offer flexible student, individual, and business loan credit frameworks featuring a transparent 20% interest allocation system.";
    }
    else if(message.includes("investment") || message.includes("yield")){
        reply = "Our investment services prioritize asset structure planning and capital optimization strategy blueprints.";
    }
    else if(message.includes("trading") || message.includes("class")){
        reply = "Our Practical Classes path pairs student cohorts with skilled active traders to teach live market mechanics.";
    }
    else if(message.includes("hello") || message.includes("hi")){
        reply = "Hello! Welcome to the LizKemi Capital interface console. How may our team guide your financial strategy today?";
    }

    setTimeout(() => {
        chat.innerHTML += `<div class="bot">${reply}</div>`;
        chat.scrollTop = chat.scrollHeight;
    }, 400);

    input.value = "";
}

// Window Loading Routines
window.addEventListener('DOMContentLoaded', () => {
    runCalculationEngine();
    runInvestmentEngine();
    convertEquityMatrix(); // Set up standard baseline values on mount
    
    document.getElementById("userInput").addEventListener("keydown", function(e){
        if(e.key === "Enter"){
            sendMessage();
        }
    });
});

/* --- Stellar Cosmic Particle Constellation Rendering System --- */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let width, height, particles = [];

function setSize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initParticles();
}

class Particle {
    constructor(targetX, targetY) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.targetX = targetX;
        this.targetY = targetY;
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 0.05 + 0.02;
        this.alpha = 0;
        this.glow = Math.random() * Math.PI * 2;
    }
    update() {
        this.x += (this.targetX - this.x) * this.speed;
        this.y += (this.targetY - this.y) * this.speed;
        if (this.alpha < 1) this.alpha += 0.01;
        this.glow += 0.05;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
        ctx.fill();
    }
}

function initParticles() {
    ctx.clearRect(0, 0, width, height);
    ctx.font = "bold 70px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    // Scale down text layout dynamically for smaller viewport frames
    if(width < 768) { ctx.font = "bold 32px Arial"; }
    
    ctx.fillText("Liz KEMI Capital FIRM", width / 2, height / 2);

    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    particles = [];

    for (let y = 0; y < height; y += 5) {
        for (let x = 0; x < width; x += 5) {
            const index = (y * width + x) * 4;
            if (data[index + 3] > 128) {
                particles.push(new Particle(x, y));
            }
        }
    }
}

window.addEventListener('resize', setSize);
setSize();

function animate() {
    ctx.fillStyle = "rgba(5, 5, 21, 0.15)";
    ctx.fillRect(0, 0, width, height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}
animate();
