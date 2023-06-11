function convertNepaliToEnglish() {
  const nepaliDateInput = document.getElementById('nepaliDate').value;

  // Validate the input format (YYYY-MM-DD)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(nepaliDateInput)) {
    alert('Please enter a valid Nepali date in the format YYYY-MM-DD');
    return;
  }

  const nepaliDate = nepaliDateInput.split('-');
  const nepaliYear = parseInt(nepaliDate[0], 10);
  const nepaliMonth = parseInt(nepaliDate[1], 10);
  const nepaliDay = parseInt(nepaliDate[2], 10);

 

  // Add 56 years, 9 months, and 17 days to the Nepali date
  let englishYear = nepaliYear - 56;
  let englishMonth = nepaliMonth - 9;
  let englishDay = nepaliDay - 17;


  // Adjust the English date if it exceeds the maximum values
  // if (englishMonth > 12) {
  //   englishYear += Math.floor((englishMonth - 1) / 12);
  //   englishMonth = (englishMonth - 1) % 12 + 1;
  // }else{
  //   englishYear -= Math.floor((englishMonth + 1) / 12);
  //   englishMonth = (englishMonth + 1) % 12 - 1;
  // }
  
  if(englishMonth >= nepaliMonth){
    englishMonth = englishMonth - nepaliMonth;
  }else {
    englishYear--;
    englishMonth = 12 + englishMonth;
  }

  //in case month is greater than 12
  if(englishMonth > 12){
    englishYear++;
    englishMonth =  englishMonth - 12;
  }

  if(englishDay >= nepaliDay){
    englishDay = englishDay - nepaliDay;
  }else {
    englishDay = 31 + englishDay;
  }

  if(englishDay > 31){
    englishMonth++;
    englishDay = englishDay - 31;
  }
 
 
 

  // Display the result
  const englishDateResult = document.getElementById('englishDateResult');
  englishDateResult.textContent = `English Date: ${englishYear}-${englishMonth}-${englishDay}`;
}

// Helper function to get the number of days in a month
function getDaysInMonth(month, year) {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 2 && isLeapYear(year)) {
    return 29;
  }
  return daysInMonth[month - 1];
}

// Helper function to check if a year is a leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
