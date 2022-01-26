import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import NavMenu from './components/NavMenu/NavMenu';
import ChartAll from './components/Home/ChartAll';
import ExcelView from './components/Home/ExcelView';
import Student from './components/Student/Student';
import { windowActions } from './store/windowSlice';
import { excelActions } from './store/excelSlice';
import './css/App.css';
// import below needed to register every element used from ChartJS (for charts to work)
import 'chart.js/auto';

function App() {
  
  const studentData = useSelector(state => state.data);
  const averages = useSelector(state => state.average.assignments);
  const windowWidth = useSelector(state => state.window.width);
  const showExcel = useSelector(state => state.excel.view);
  
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

  // switch from barchart view to excel view based on window size 
  useEffect(() => {
    if (windowWidth < 1100) {
      dispatch(excelActions.setView(true))
    }
    if (windowWidth > 1100) {
      dispatch(excelActions.setView(false))
    }
  });
  
  return (
    <Router>
      
      <header >
        <div>
          <h1>Winc Student Dashboard</h1>
        </div>
      </header>

      <nav >
        <div className='NavMenu'>
          <NavMenu/>
        </div>
      </nav>

      <main>
        <Switch>
          <Route exact path="/">
              <div className='all' >
                <section >
                  {!showExcel &&
                    <ChartAll 
                      assignments={averages}
                    />
                  }
                  {showExcel && <ExcelView />}
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
