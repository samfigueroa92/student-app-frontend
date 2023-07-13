const StudentCard = ({ student }) => {
  const { email, company, firstName, lastName, pic, grades, id, skill } =
    student;

  const numericGrades = grades.map((grade) => Number(grade));

  let total = 0;
  for (let grade of numericGrades) {
    total += grade;
  }

  const avg = total / numericGrades.length;

  return (
    <div className="StudentCard">
      <div key={id}>
        <img src={pic} alt={`${firstName} ${lastName}`} />
        <h1>
          {firstName} {lastName}
        </h1>
        <ul>
          <li>Email: {email}</li>
          <li>Company: {company}</li>
          <li>Skill: {skill}</li>
          <li>Average: {avg}%</li>
        </ul>
      </div>
    </div>
  );
};

export default StudentCard;
