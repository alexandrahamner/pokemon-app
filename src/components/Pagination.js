import React from 'react';

export default function Pagination({ goToNextPage, goToPreviousPage}) {
    return (
        <div>
            {/* Check to see if there is a previous page, if not, hide the button */}
            { goToPreviousPage && <button onClick={goToPreviousPage}>Previous</button> }
            { goToNextPage && <button onClick={goToNextPage}>Next</button> }
        </div>
    );
}