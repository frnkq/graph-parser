const {parse} = require('./parser');

const parseGraph = function(){
    const args = process.argv.slice(2);
    parse(args);
}

module.exports = {
    parseGraph    
}

parseGraph();