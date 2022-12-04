import React from "react";
import Button from '@mui/material/Button';

export default function SubmitButton({onClick}) {
    return (
        <Button variant="contained" className="w-full" onClick={onClick}>Masuk</Button>
    )
}