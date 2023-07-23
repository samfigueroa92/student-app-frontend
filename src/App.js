import './App.css';
import { useState, useEffect } from 'react';
import StudentList from './StudentList/StudentList';
import Loading from './Loading/Loading';
import Error from './Error/Error';


const API_URL = 'http://localhost:8888'

function App() {
  const  [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchData(){
      try{
        setLoading(true);
        const res = await fetch(`${API_URL}/students`);
        const json = await res.json();

        const {data, error} = json;
        if(res.ok){
          setStudentData(data);
          setLoading(false);
        }else{
          setError(error);
          setLoading(false);
        }
      }catch(err){
        setLoading(false);
        setError(err.message)
      }
    };
    fetchData();
  }, []);

  const renderContent = () => {
    if(loading){
      return <Loading />
    }else if(error){
      return <Error error={error} />
    }else {
      return <StudentList studentData={studentData} />
    }
  }

  return (
    <div className="App">
      {renderContent()}
    </div>
  );
}

export default App;
