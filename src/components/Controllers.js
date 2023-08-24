import { store } from '@/ContextProvider';
import { useContext } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { transition, config } from '@/pages/Overlay';

function Controllers() {
  const {
    setImageRotate,
    setImageXPosition,
    setImageYPosition,
    setImageScale,
    color,
    resetChanges,
  } = useContext(store);

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ y: 200, opacity: 0 }}
      transition={transition}
      className='absolute top-aute sm:bottom-auto bottom-0 sm:top-10 sm:left-10 flex flex-col gap-3 p-2 
                sm:p-4 bg-white/30 w-full sm:w-fit pb-14 sm:pb-4
                backdrop-blur-sm rounded-lg
      '
      style={{ border: `1px solid ${color}` }}
    >
      <div className='flex flex-col'>
        <label htmlFor='scale'>اندازه</label>
        <input
          style={{ accentColor: color }}
          type='range'
          min='0'
          max='3'
          step='0.05'
          defaultValue='1.5'
          class='slider'
          onMouseUp={(e) => setImageScale(e.target.value)}
          id='scale'
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='scale'> موقعیت افقی</label>
        <input
          style={{ accentColor: color }}
          type='range'
          min='-3'
          max='3'
          step='0.05'
          defaultValue='0'
          class='slider'
          onMouseUp={(e) => {
            setImageXPosition(-e.target.value * 0.08);
          }}
          id='scale'
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='scale'> موقعیت عمودی</label>
        <input
          style={{ accentColor: color }}
          type='range'
          min='-6'
          max='4'
          step='0.05'
          defaultValue='-1'
          class='slider'
          onMouseUp={(e) => {
            setImageYPosition(e.target.value * 0.08);
          }}
          id='scale'
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='scale'> چرخش</label>
        <input
          style={{ accentColor: color }}
          type='range'
          min='-180'
          max='180'
          step='1'
          defaultValue='-1'
          class='slider'
          onMouseUp={(e) => {
            setImageRotate((e.target.value / 180) * Math.PI);
          }}
          //   onChange={(e) => {
          //     setImageRotate((e.target.value / 180) * Math.PI);
          //   }}
          id='scale'
        />
      </div>
      <div className='flex flex-col'>
        <Button onClick={resetChanges} posittion='!w-full ' color={color}>
          <span className='w-full text-center'>لغو تغیرات</span>
        </Button>
      </div>
    </motion.div>
  );
}

export default Controllers;
