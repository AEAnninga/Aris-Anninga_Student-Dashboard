import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { navActions } from '../../store/navigationSlice';
import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { studentNavButtonTheme } from '../Student/button-themes';

const imgUrl = require('../../images/winc-logo-4.png');

const NavMenuSmall = () => {

  const studentData = useSelector(state => state.data);
  const studentState = useSelector(state => state.student);
  const navTabPath = useSelector(state => state.navigation.path);
  const showMenu = useSelector(state => state.navigation.showMenu)
  const dispatch = useDispatch();
  const navClassAll = navTabPath === '/' ? 'active-home-tab' : '';

  const handleTabStyle = (navPath) => {
    if (navPath) {
        dispatch(navActions.setPath(navPath));
    }
    if (showMenu) {
        dispatch(navActions.toggleMenu())
    }
  };

  const handleClick = () => {
    dispatch(navActions.toggleMenu())
  }

  return (
    <React.Fragment>
      <div className={navClassAll}>
        <NavLink to="/" onClick={() => handleTabStyle('/')}>
          <img className="home-icon" src={imgUrl} alt='winc-logo'/>
        </NavLink>
      </div>

      <div className='menu-small'>
        <ul>
          {!showMenu &&
            <ThemeProvider theme={studentNavButtonTheme}>
              <Button
                variant='contained'
                color='student'
                onClick={() => handleClick()}
              >
                Students
              </Button>
            </ThemeProvider>   
          }
          {showMenu && studentData.map((item, index) => {
            const showStudent = studentState[index].showStudent;
            const studentPath =  showStudent ? `/${item.name}` : `/${item.name}/assignments`;
            return ( 
              <li key={item.id}>
                <NavLink  
                  to={studentPath}
                  onClick={() => handleTabStyle(studentPath)}
                >
                  {item.name}
                </NavLink>
              </li>
            )})
          }

          {showMenu && 
            <li onClick={() => handleClick()}>
              X
            </li>
          }
        </ul>
      </div>
    </React.Fragment>
  );
};
 
export default NavMenuSmall;