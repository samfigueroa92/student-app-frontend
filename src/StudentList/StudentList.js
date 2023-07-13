import StudentCard from "../StudentCard/StudentCard";

const StudentList = ({ studentData }) => {
  return (
    <div className="StudentList">
      {studentData.map((student) => (
        <StudentCard student={student} />
      ))}
    </div>
  );
};

export default StudentList;
