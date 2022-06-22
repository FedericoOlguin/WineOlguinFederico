import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingProgress() {


    return (
        <div>
            <h2>Lading...</h2>
            <CircularProgress disableShrink />
        </div>
    )
}
