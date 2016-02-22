'use strict';

export const hello = (req, { status }) => {
    status(200).json({
        success: true,
        message: 'Oh hai!'
    });
};
