import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { studentActions } from '../../../../../store/studentSlice';
import { Button } from '@mui/material';
import { topFiveButtonTheme } from '../../../button-themes';
import { ThemeProvider } from '@mui/material/styles';

const RadarChartButton = ({ index }) => {
  
  // boolean to handle button view
  const funActive = useSelector(state => state.student[index].topFiveFun);

  const dispatch = useDispatch();

  const handleTopFive = index => {
    dispatch(studentActions.setTopFive(index))
  };
  
  return ( 
    <ThemeProvider theme={topFiveButtonTheme}>
    <div className='student-content-info-button'>
      {funActive && 
        <Button 
          color='difficult' 
          variant='contained' 
          onClick={() => handleTopFive(index)} 
        >
          Show Top 5 Difficult
        </Button>
      }
      {!funActive && 
        <Button 
          color='fun' 
          variant='contained' 
          onClick={() => handleTopFive(index)} 
        >
          Show Top 5 FunFactor
        </Button>
      }
    </div> 
    </ThemeProvider>
  );
};
 
export default RadarChartButton;