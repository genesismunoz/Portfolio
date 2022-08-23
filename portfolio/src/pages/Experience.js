import React from "react";
import {
    VerticalTimeline, 
    VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import ExploreIcon from "@material-ui/icons/Explore";

function Experience(){
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#664797">
                <VerticalTimelineElement className="vertical-timeline-element--education"
                date="2013-2017"
                iconStyle={{background:"#b05d8c", color: "#ffd4a2"}}
                icon={<SchoolIcon />}>
                <h3 className="vertical-timeline-element-title">
                    J.W. Nixon High School, Laredo, TX
                </h3>
                <p>High School Diploma</p>  

                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element-title"
                date="2017-2021"
                iconStyle={{background: "#b05d8c", color: "#ffd4a2"}}
                icon={<SchoolIcon/>}>
                <h3 className="vertical-timeline-element-title">
                    Texas A&M University, College Station, TX
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Bachelor's Degree
                </h4>
                <p>Computer Engineering</p>
                <p>Spanish</p>

                </VerticalTimelineElement>
                
                <VerticalTimelineElement className="vertical-timeline-element-studyabroad"
                date="2019"
                iconStyle={{background: "#b05d8c", color: "#ffd4a2"}}
                icon={<ExploreIcon />}>
                    <h3 className="vertical-timeline-element-title">
                        "Aggies in the Andes", Santiago, Chile
                    </h3>
                    <p>Study Abroad Program</p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement className="vertical-timeline-element--work"
                date="2018-2021"
                iconStyle={{background: "#b05d8c", color: "#ffd4a2"}}
                icon={<WorkIcon />}>
                    <h3 className="vertical-timeline-element-title">
                        Peer Teacher - Texas A&M Engineering Department
                    </h3>
                    <h4>College Station, TX</h4>
                    <p>Assisted faculty teaching Python-based course to freshman engineering students. Graded coursework, coordinated and conducted Newtonian physics-based lab for students taking university physics.</p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    );
}

export default Experience;