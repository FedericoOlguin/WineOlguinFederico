import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingProgress() {


    return (
        <>
            <h2>Lading...</h2>
            <CircularProgress disableShrink />;
        </>
    )
}
