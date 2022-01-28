import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import NavMenu from './components/NavMenu/NavMenu';
import NavMenuSmall from './components/NavMenu/NavMenuSmall'
import ChartAll from './components/Home/ChartAll';
import ChartAllHorizontal from './components/Home/ChartAllHorizontal';
import Student from './components/Student/Student';
import { windowActions } from './store/windowSlice';
import { horizontalBarActions } from './store/horizontalBarSlice'
import './css/App.css';
// import below needed to register every element used from ChartJS (for charts to work)
import 'chart.js/auto';

function App() {
  
  const studentData = useSelector(state => state.data);
  const averages = useSelector(state => state.average.assignments);
  const windowWidth = useSelector(state => state.window.width);
  const showHorizontal = useSelector(state => state.horizontalBar.showHorizontalBar);
  
  const dispatch = useDispatch();

  // keep track of window size
  useEffect(() => {
    const handleWindowResize = () => {
      dispatch(windowActions.setWidth())
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    };
  });

  // switch to horizontal barchart based on window size 
  useEffect(() => {
    if (windowWidth < 1100) {
      dispatch(horizontalBarActions.setShowHorizontalBar(true))
    }
    if (windowWidth > 1100) {
      dispatch(horizontalBarActions.setShowHorizontalBar(false))
    }
  }, [windowWidth, dispatch]);
  
  return (
    <Router>
      
      <header >
        <div>
          <h1>Winc Student Dashboard</h1>
        </div>
      </header>

      <nav >
        <div className='NavMenu'>
          {windowWidth > 600 ? <NavMenu/> : <NavMenuSmall />}
          
        </div>
      </nav>

      <main>
        <Switch>
          <Route exact path="/">
              <div className='all' >
                <section >
                  {!showHorizontal &&
                    <ChartAll assignments={averages}/>
                  }
                  {showHorizontal && 
                    <ChartAllHorizontal assignments={averages}/>
                  }
                </section>
              </div>
          </Route>
          {studentData.map((item, index) => (
            <Route path={`/${item.name}`} key={item.id}>
              <section className='student'>
                  <Student 
                    studentData={item}
                    averages={averages}
                  />
              </section>
            </Route>
          ))}
        </Switch>
      </main>

    </Router>
  );
};

export default App;
