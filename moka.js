


function calctax(salary) {
  
  tax;

  personalAllowance = 10000


  if( salary < 100000 ) {
    difference = salary - personalAllowance
    tax = 31865 * 0.2 + (difference - 31865) * 0.4

  if( salary >= 100000 && salary < 120000 ) {
    difference = salary - personalAllowance
    newPA = personalAllowance - difference * 2
    deductedPA = salary - newPA
    tax = 31865 * 0.2 + (deductedPA - 31865) * 0.4
  }
  else if ( salary >= 150000 ) {
    difference = salary - 150000
    tax = (31865 * 0.2) + (150000 - 31865) * 0.4 + (difference * 0.45)
  }

  return tax;  
}

function calcNIC(salary) { 

  NIC;

  Nil = 7956

  if( salary <= 7956 ) {
    NIC = 0
  }
  else if( salary >= 7957 && salary <= 41865 ) {
    NIC = (salary - Nil) * 0.12
  }

  else if( salary >= 41866 ) {
    NIC = (41865 - Nil) * 0.12 + (salary - 41866) * 0.02
  }

  return NIC
}


function main() {
  
  var salary = 219392;

  var taxable = [
    20000,
    30000,
    40000,
  ];

  var exempt = [
    39999,
    40000,
  ]

  var sumTaxable = taxable.reduce((prev, curr) => {
    return prev + curr;
  });  

  var sumExempt = exempt.reduce((prev, curr) => {
    return prev + curr;
  });

  var gross = sum + salary;

  var net = calcTax(gross);

  var total = net + sumExempt; 

}
