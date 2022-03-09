import React from "react";

function RecentWork() {
    return (
        <div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
                <h1>
                    My Recent Work
                </h1>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="col">
                            <h1>Kingdom Man</h1>
                            <p>
                                Kingdom Man is my latest React project to show all the details of Inspire Waikele’s event, Kingdom Man. It is a mobile app that lets you sign up, gives you details and connect with Inspires team.
                            </p>
                        </div>
                    </div>
                    <img
                        className="col"
                            src="/Images/Iphone.png"
                            style={{
                                width: "50vh",
                            }}
                    />
                </div>
            </div>
        </div>
    )
}
export default RecentWork;