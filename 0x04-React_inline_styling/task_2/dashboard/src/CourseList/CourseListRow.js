import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
return (
    <tr className={css(isHeader ? styles.headerRow : styles.defaultRow)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className={css(styles.headerCell)}>{textFirstCell}</th>
        ) : (
          <>
            <th className={css(styles.headerCell)}>{textFirstCell}</th>
            <th className={css(styles.headerCell)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.defaultCell)}>{textFirstCell}</td>
          <td className={css(styles.defaultCell)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
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
    backgroundColor: '#f9f9f9',
  },
  headerCell: {
    fontWeight: 'bold',
    textAlign: 'left',
    borderBottom: '2px solid #ddd',
    padding: '8px',
  },
  defaultCell: {
    textAlign: 'left',
    padding: '8px',
    borderBottom: '1px solid #ddd',
  },
});
	
export default CourseListRow;
