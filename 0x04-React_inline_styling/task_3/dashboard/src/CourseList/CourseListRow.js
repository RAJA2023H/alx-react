import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  if (isHeader) {
    return{
      <tr className={css(styles.headerRow)}>
        {textSecondCell === null ?
          <th colSpan="2" className={css(styles.headerCell)}>{textFirstCell}</th>
      ) : (
	  <>
	    <th className={css(styles.headerCell)}>{textFirstCell}</th>
            <th className={css(styles.headerCell)}>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  } else {
    return (
      <tr className={css(styles.defaultRow)}>
        <td className={css(styles.defaultCell)}>{textFirstCell}</td>
        <td className={css(styles.defaultCell)}>{textSecondCell}</td
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#f5f5f5',
  },
  defaultRow: {
    backgroundColor: '#fff',
  },
  headerCell: {
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
    padding: '10px',
  },
  defaultCell: {
    textAlign: 'left',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  }
});
export default CourseListRow;
