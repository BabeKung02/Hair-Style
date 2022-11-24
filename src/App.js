import { useState } from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import MaleStyles from './components/MaleStyles';
import FemaleStyles from './components/FemaleStyles';
import MaleSearch from './components/MaleSearch';
import FemaleSearch from './components/FemaleSearch';
import HairItem from './components/HairItem';
import HairPost from './components/HairPost';
import Males from './data/Males';
import Females from './data/Females';
import './App.css';

function App() {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchText2, setSearchText2] = useState('');

  function OpenClick (hair) {
    setSelectedStyle(hair);
  }

  function CloseClick() {
    setSelectedStyle(null);
  }
  
  const MaleItems = Males.filter((hair) => {
    return hair.title.includes(searchText);
  }).map((hair, index) => {
    return <HairItem key={index} hair={hair} OnClick={OpenClick} />;
  });

  const FemaleItems = Females.filter((hair) => {
    return hair.title.includes(searchText2);
  }).map((hair, index) => {
    return <HairItem key={index} hair={hair} OnClick={OpenClick} />;
  });

  let hairPost = null;
  if (!!selectedStyle) {
      hairPost = <HairPost hair={selectedStyle} OnClick={CloseClick} />;
  }

  return (
    <div className="app">
      <AppHeader />
      <section className="app-section">
        <div className="app-container">
          <MaleStyles />
          <MaleSearch value={searchText} onValueChange={setSearchText} />
            <div className="app-grid">
            {MaleItems}
            </div>
          <br/>  <hr/>
          <FemaleStyles />
          <FemaleSearch value2={searchText2} onValueChange2={setSearchText2} />
            <div className="app-grid">
          {FemaleItems}
            </div>
        </div>
      </section>
      <AppFooter />
      {hairPost}
    </div>
  );
}

export default App;