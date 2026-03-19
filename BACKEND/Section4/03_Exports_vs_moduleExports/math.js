// AP formulas:

const nthTerm = (a,n,d) => a + (n-1) * d;
const sumOfnTerms = (n,a,d) => (n/2) * (2*a + (n-1) * d);

const lastTerm = (a,n,d) => a + (n-1) * d;
const middleTerm = (a,l) => (a+l)/2;


module.exports = {
   nthTerm, sumOfnTerms, lastTerm, middleTerm
};

// exports.nthTerm = nthTerm;
// exports.sumOfnTerms = sumOfnTerms;
// exports.lastTerm = lastTerm;
// exports.middleTerm = middleTerm;

// exports = { name : 'Shubham Rawat'};

// console.log(module.exports, 'module exports')
// console.log(exports, 'exports')