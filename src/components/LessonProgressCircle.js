import React from 'react';

import CircleProgress from './CircleProgress';

const LessonProgressCircle = ({children, style, progressCircleStyle = {}, progress}) => {
    const defaults = {
        width: 0,
        height: 0,
        borderWidth: 0,
        borderColor: 0,
        backgroundColor: null,
    }
    // progressCircleStyle = {...defaults, ...progressCircleStyle};
    return (
        <CircleProgress
            style={style}
            size={Math.max(progressCircleStyle.width, progressCircleStyle.height)}
            strokeWidth={progressCircleStyle.borderWidth}
            strokeColor={progressCircleStyle.borderColor}
            strokeBackgroundColor={progressCircleStyle.backgroundColor}
            rotation={45}
            progress={progress}
        >
            {children}
        </CircleProgress>
    );
}

export default LessonProgressCircle;