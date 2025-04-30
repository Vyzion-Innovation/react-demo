import React, { useEffect, useState } from 'react'
import { RoutingPaths } from '../../components';
import { getItemCountFromLocalStorage } from '../../components/api';
import { useNavigate } from '../../libraries';
import "./index.css"



function Home() {
  // MARK: Variables declaration
  const [count, setCount] = useState(0);
  const navigate = useNavigate();



  // MARK:Controller lifecycle
  useEffect(() => {
    const count = getItemCountFromLocalStorage('businessData');
    setCount(count);
  }, []);

  // MARK: Controller function
  function businessListPath() {
    navigate(RoutingPaths.businessList);
    window.scrollTo(0, 0);
  }

// MARK: UI
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