var Employees=[];
Employees=[
{
  name:'Karthikeyan.K',
  age:24,
  salary:40000,
  address:{city:'Pune',state:'Maharashtra',pincode:411015}
},{
  name:'Johnkennady Vincent',
  age:26,
  salary:30000,
  address:{city:'Pune',state:'Maharashtra',pincode:411015}
},{

  name:'Antony Raj',
  age:27,
  salary:40000,
  address:{city:'Pune',state:'Maharashtra',pincode:411015}
},{

  name:'SatheeshKumar',
  age:24,
  salary:35000,
  address:{city:'Pune',state:'Maharashtra',pincode:411015}
},{
  name:'Prem',
  age:23,
  salary:30000,
  address:{city:'Pune',state:'Maharashtra',pincode:411015}
}
];
//personalInfo will print Employees object in console
var personalInfo=function () {
  console.log('Employee Detail');
  console.log('Employee Name :'+Employees[1].name);
  console.log('Employee Age :'+Employees[1].age);
  console.log('Employee Salary:'+Employees[1].salary);
  console.log('Employee Address');
  console.log('City :'+Employees[1].address.city);
  console.log('State :'+Employees[1].address.state)
  console.log('Pinecode :'+Employees[1].address.pincode);

}

personalInfo();
