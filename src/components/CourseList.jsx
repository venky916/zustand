import React from 'react'
import useCourseStore from '../app/courseStore'

const CourseList = () => {
    // const { courses, removeCourse, toggleCourseStatus } = useCourseStore((state) => (
    //     {
    //         courses: state.courses,
    //         removeCourse: state.removeCourse,
    //         toggleCourseStatus :state.toggleCourseStatus
    //     }
    // ))
    const courses = useCourseStore((state) => state.courses);
    const removeCourse = useCourseStore((state) => state.removeCourse);
    const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus);

    
    console.log('Rendering CourseList'); // To check for repeated renders
  return (
      <>
          <ul>
              { courses.map((course, i) => {
                  return (
                      <React.Fragment key={i}>
                          <li
                              className=' course-item'
                              style={ {
                                  backgroundColor: course.completed ? "#00ff0044" :"white"
                              }}
                          >
                              <span className='course-item-col-1'>
                                  <input type='checkbox'
                                      checked={ course.completed }
                                      onChange={ () => toggleCourseStatus(course.id) }
                                  />
                              </span> 
                              <span style={{color:"black"}}>{ course?.title }</span>
                              <button className='delete btn'
                                  onClick={ () => removeCourse(course.id) }
                              >
                                  Delete
                              </button>
                          </li>
                      </React.Fragment>
                  )
              })}
          </ul>
      </>
  )
}

export default CourseList