import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';

const CourseList = ({ courses }) => (
    <table className={css(styles.table)}>
        <thead>
            <CourseListRow isHeader={true} textFirstCell="Available courses" />
            <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
        </thead>
        <tbody>
            {courses.length === 0 ? (
                <CourseListRow textFirstCell="No course available yet" />
            ) : (
                courses.map((course) => (
                    <CourseListRow
                        key={course.id}
                        textFirstCell={course.name}
                        textSecondCell={course.credit.toString()}
                    />
                ))
            )}
        </tbody>
    </table>
);

CourseList.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            credit: PropTypes.number.isRequired,
        })
    ),
};

CourseList.defaultProps = {
    courses: [],
};

// Define Aphrodite styles
const styles = StyleSheet.create({
    table: {
        width: '100%',
        border: '1px solid #ddd',
        marginTop: '20px',
        textAlign: 'left',
    },
});

export default CourseList;
