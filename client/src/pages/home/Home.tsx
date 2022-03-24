import React from 'react'; 
import Card from '../../components/card/Card';
import SearchBar from '../../components/searchBar/SearchBar';
import './Home.css';

function Home() {
    return (
        <div>
          <SearchBar />
          <section className='job'>
            <div className='job-card'>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className='job-detail'>
              <img />
              apsdhashasd
            </div>
          </section>
        </div>
    )
}

export default Home; 