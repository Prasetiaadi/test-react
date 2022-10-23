import Select from 'react-select';
import { useEffect, useState } from 'react';

function App() {
  const [datas, setDatas] = useState([]);
  const [userSelect, setUserSelect] = useState('');
  const [isShow, setIsShow] = useState(false);

  const getBerries = async () => {
    const berries = await fetch('https://pokeapi.co/api/v2/berry/');
    const value = await berries.json();
    const result = value.results.map((data) => {
      return {
        label: data.name,
        value: data.name,
      };
    });
    setDatas(result.sort((a, b) => a.label.localeCompare(b.label)));
  };

  useEffect(() => {
    getBerries();
  }, []);


  const handleChange = (value) => {
    setUserSelect(value);
  };

  return (
    <div className="App">
      <Select options={datas} onChange={(e) => handleChange(e.value)}>
        select
      </Select>
      <br />
      <h1 >{setIsShow ? userSelect : 'Select one'}</h1>
      {/* <button onClick={() => handleSubmit()}>Show</button> */}
    </div>
  );
}

export default App;
