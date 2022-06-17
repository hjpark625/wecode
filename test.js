const getOddNum = () => {
    let i = 1;
    let j = 50
    
    let result = [];
    
    while (i < j+1) {
      result.push(i++)
    }
    
    let odds = result.filter(num => {
      return num % 2 === 0;
    })
    return odds;
  }