import {Component} from 'angular2/core'
import {CoursesService} from './courses.service'

@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
                {{title}}
                <ul>
                    <li *ngFor="#course of courses">
                    {{course}}</li>
                </ul>
                <h2>Faculty</h2>
                <ul>
                    <li *ngFor="#faculty of courseFaculty">
                    {{faculty}}</li>
                </ul>
                `,
    providers: [CoursesService]
})

export class CoursesComponent{
    title = "You have enrolled in following courses";
    courses = ["Operating Systems", "DSP Systems", "Compute Architecture"];
    courseFaculty;

    constructor(courseService : CoursesService){
        this.courseFaculty = courseService.getFaculty();
    }
}