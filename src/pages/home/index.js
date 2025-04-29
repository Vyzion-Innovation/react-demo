import React, { useEffect, useState } from 'react'
import { RoutingPaths } from '../../components';
import { getItemCountFromLocalStorage } from '../../components/api';
import { useNavigate } from '../../libraries';
import "./index.css"



function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const count = getItemCountFromLocalStorage('businessData');
    setCount(count);
  }, []);

  // MARK: business list path
  function businessListPath() {
    navigate(RoutingPaths.businessList);
    window.scrollTo(0, 0);
  }


  return (
    <div className="modules__main__div">
        <div className="col-4">
          <div className="card p-4 home__card">
            <p className="dashboard-para">Total Business:</p>
            <p className="dashboard-content" onClick={businessListPath}>
              {count}
            </p>
          </div>
      </div>
    </div>
  )
}

export default Home