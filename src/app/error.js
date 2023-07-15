"use client"

const Error = ({ error, reset }) => {
    return (
        <div className="mt-80">
            <div className="text-2xl text-red-500 text-center">Error due to: {error.message} </div>
            <p className="text-center">Handled by error.js in AppRouter</p>
        </div>
    );
};

export default Error;
