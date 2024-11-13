import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection';
import PropTypes from 'prop-types';

const BodySectionWithMarginBottom = (props) => (
    <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...props} />
    </div>
);

BodySectionWithMarginBottom.propTypes = {
    children: PropTypes.node,
};

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '20px',
    },
});

export default BodySectionWithMarginBottom;
