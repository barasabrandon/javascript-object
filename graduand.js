function displayGraduant() {
  const graduantsArray = ['John', 'Jane', 'James', 'Jill'];
  graduantsArray.forEach((granduand, index) => {
    console.log(`Congratulations ${granduand} on your graduation! ${index}`);
  });

  const graduantsObject = { name: 'Sharon Murithi', course: 'Computer Science ', year: 2027 };
  console.log(
    'Congratulations ' + graduantsObject.name + 'on your graduation in',
    graduantsObject.course + graduantsObject.year
  );

  const graduadionDetails = [
    { name: 'Sharon Murithi', course: 'Computer Science ', year: 2027, units: ['COM 101', 'COM 102', 'COM 103'] },
    { name: 'John', course: 'Computer Science ', year: 2027, units: ['COM 101', 'COM 102', 'COM 103'] },
    { name: 'Jane', course: 'Computer Science ', year: 2027, units: ['COM 101', 'COM 102', 'COM 103'] },
    { name: 'James', course: 'Computer Science ', year: 2027, units: ['COM 101', 'COM 102', 'COM 103'] },
    { name: 'Jill', course: 'Computer Science ', year: 2027, units: ['COM 101', 'COM 102', 'COM 103'] },
  ];

  graduadionDetails.forEach((item, index) => {
    console.log(item.name);
    item.units.forEach((unit, index) => {
      console.log(unit);
    });
  });

  const getGraduandContainer = document.getElementById('graduands');
  if (getGraduandContainer) {
    console.log('Container found');
    const graduandElement = document.createElement('div');
    graduandElement.classList.add('graduand');

    graduandElement.innerHTML = `   <div>Name: Iren Nasieku</div>
        <div>School: Biological and Physical Sciences</div>
        <div>Course: Computer Science</div>
        <div>Reg No: COM/2541/23</div>`;

    getGraduandContainer.appendChild(graduandElement);
  } else {
    console.log('Container not found');
  }
}
displayGraduant();
