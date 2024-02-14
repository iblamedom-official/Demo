function simulateAnalysis() {
    const age = document.getElementById('age').value;
    const symptoms = document.getElementById('symptoms').value.split(',');
    const gender = document.getElementById('gender').value;

    // Mock API Call Simulation
    setTimeout(() => { // Simulate network delay
        const riskScore = calculateRiskScore(age, symptoms, gender);
        displayChart(riskScore);
    }, 1000); // Simulated delay of 1 second
}

function calculateRiskScore(age, symptoms, gender) {
    // Simulate complex risk score calculation
    let score = Math.min(Math.max(age / 100, 0.1), 0.9) + (symptoms.length * 0.05);
    score += (gender === 'female' ? 0.05 : 0.1); // Adjust based on gender
    return score;
}

function displayChart(score) {
    const ctx = document.getElementById('analysisChart').getContext('2d');
    const labels = ['Risk Score'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Patient Risk Score',
            data: [score],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, ticks) {
                            return value * 100 + '%';
                        }
                    }
                }
            }
        }
    });
}
