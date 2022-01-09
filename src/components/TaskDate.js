import React from 'react';
import moment from 'moment';
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) =>
  showTaskDate && (
      <ul className="task-date__list">
        <li onClick={() => {
            setShowTaskDate(false);
            setTaskDate(moment().format('DD/MM/YYYY'));
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setShowTaskDate(false);
              setTaskDate(moment().format('DD/MM/YYYY'));
            }
          }}
          data-testid="task-date-today"
          tabIndex={0}
          aria-label="Select today as the task date"
          role="button">
            <span className='icon_span'>
              <FaSpaceShuttle />
            </span>
            <span>Today</span>
        </li>
        <li  onClick={() => {
            setShowTaskDate(false);
            setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setShowTaskDate(false);
              setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
            }
          }}
          data-testid="task-date-tomorrow"
          role="button"
          tabIndex={0}
          aria-label="Select tomorrow as the task date">
            <span  className='icon_span'>
              <FaSun />
            </span>
            <span>Tomorrow</span>
        </li>
        <li onClick={() => {
            setShowTaskDate(false);
            setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setShowTaskDate(false);
              setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
            }
          }}
          data-testid="task-date-next-week"
          aria-label="Select next week as the task date"
          tabIndex={0}
          role="button">
            <span  className='icon_span'>
              <FaRegPaperPlane />
            </span>
            <span>Next week</span>
        </li>
      </ul>
  );
