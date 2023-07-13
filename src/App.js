import './App.css';
import { useState, useEffect } from 'react';
import StudentList from './StudentList/StudentList';

const API_URL = 'http://localhost:8888'

function App() {
  const  [studentData, setStudentData] = useState([]);


  useEffect(() => {
    async function fetchData(){
      const res = await fetch(`${API_URL}/students`);
      const json = await res.json();
      console.log(json);
      const {data} = json;
      setStudentData(data)
    }
    fetchData();

  }, []);

  return (
    <div className="App">
      <StudentList studentData={studentData} />
    </div>
  );
}

export default App;
