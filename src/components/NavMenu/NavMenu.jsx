import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { navActions } from '../../store/navigationSlice';

const imgUrl = require('../../images/winc-logo-4.png');

const NavMenu = () => {
  const studentData = useSelector(state => state.data);
  const navTabPath = useSelector(state => state.navigation.path);
  const studentState = useSelector(state => state.student);
  const dispatch = useDispatch();
  const navClassAll = navTabPath === '/' ? 'active-home-tab' : '';

  const handleTabStyle = (navPath) => {
    dispatch(navActions.setPath(navPath));
  };

  return (
    <React.Fragment>
      <div id='nav-all' className={navClassAll}>
        <NavLink to="/" onClick={() => handleTabStyle('/')}>
          <img className="home-icon" src={imgUrl} alt='winc-logo'/>
        </NavLink>
      </div>

      {studentData.map((item, index) => {
        const showStudent = studentState[index].showStudent;
        const studentPath =  showStudent ? `/${item.name}` : `/${item.name}/assignments`;
        const hasMoreFun = studentState[index].hasMoreFun;
        const isActive = navTabPath === `/${item.name}` | navTabPath === `/${item.name}/assignments`;
        // when student navtab is active > if student average fun is higher then avg difficulty: purple border, else blue border
        const navClassStudent = (isActive && hasMoreFun) ? 'active-fun-tab' : (isActive ? 'active-home-tab' : null);
       
        return (
          <div key={index} id={item.id} className={navClassStudent}>
            <NavLink 
              key={item.id} 
              to={studentPath}
              onClick={() => handleTabStyle(studentPath)}
            >
              <img src={item.photo} alt='person'/>
            </NavLink>
          </div> 
        )})
      }
    </React.Fragment>
  );
};
 
export default NavMenu;