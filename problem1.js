// Sample dataset (replace with your actual data)
const dataset = [
    { investorID: 1, syndicateID: 'A', amount: 100, date: '2022-01-01' },
    { investorID: 1, syndicateID: 'B', amount: 200, date: '2022-01-02' },
    { investorID: 2, syndicateID: 'A', amount: 150, date: '2022-01-03' },
    { investorID: 2, syndicateID: 'C', amount: 300, date: '2022-01-04' },
    { investorID: 3, syndicateID: 'B', amount: 250, date: '2022-01-05' },
    { investorID: 4, syndicateID: 'C', amount: 250, date: '2022-01-05' },
    { investorID: 2, syndicateID: 'B', amount: 250, date: '2022-01-05' },
    { investorID: 3, syndicateID: 'A', amount: 250, date: '2022-01-05' },
    // Add more data here...
];

// Initialize an object to store investor information
const investorInfo = {};

// Iterate through the dataset and update investorInfo
dataset.forEach((record) => {
    const { investorID, syndicateID, amount } = record;

    if (!investorInfo[investorID]) {
        investorInfo[investorID] = {
            uniqueSyndicates: new Set(),
            totalInvestment: 0,
        };
    }

    investorInfo[investorID].uniqueSyndicates.add(syndicateID);
    investorInfo[investorID].totalInvestment += amount;
});

// Convert investorInfo to an array
const investorArray = Object.keys(investorInfo).map((investorID) => ({
    investorID: parseInt(investorID),
    uniqueSyndicates: investorInfo[investorID].uniqueSyndicates.size,
    totalInvestment: investorInfo[investorID].totalInvestment,
}));

// Sort investors based on uniqueSyndicates and totalInvestment
investorArray.sort((a, b) => {
    if (a.uniqueSyndicates !== b.uniqueSyndicates) {
        return b.uniqueSyndicates - a.uniqueSyndicates;
    }
    return b.totalInvestment - a.totalInvestment;
});

// Get the top 5 investors
const top5Investors = investorArray.slice(0, 5);

// Print the result
console.log("Top 5 Investors:");
top5Investors.forEach((investor, index) => {
    console.log(`Rank ${index + 1}: Investor ID ${investor.investorID}, Unique Syndicates: ${investor.uniqueSyndicates}, Total Investment: $${investor.totalInvestment}`);
});