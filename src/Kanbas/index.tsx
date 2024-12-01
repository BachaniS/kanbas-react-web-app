import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "./styles.css";
import * as userClient from "./Account/client";
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";
import * as enrollmentsClient from "./Courses/Enrollments/client";
import { enrollCourse } from "./Courses/Enrollments/reducer";
import { useDispatch } from "react-redux";

export default function Kanbas() {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState<any[]>([]);
  const [enrolling, setEnrolling] = useState<boolean>(false);

  const findCoursesForEnrolledUser = async () => {
    try {
      const courses = await userClient.findCoursesForEnrolledUser(currentUser._id);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
   try {
     const allCourses = await courseClient.fetchAllCourses();
     const enrolledCourses = await userClient.findCoursesForEnrolledUser(
       currentUser._id
     );
     const courses = allCourses.map((course: any) => {
       if (enrolledCourses.find((c: any) => c._id === course._id)) {
         return { ...course, enrolled: true };
       } else {
         return course;
       }
     });
     setCourses(courses);
   } catch (error) {
     console.error(error);
   }
 };

  useEffect(() => {
    if (enrolling) {
    fetchCourses();
    } else {
      findCoursesForEnrolledUser();
    }
  }, [currentUser, enrolling]);

  const [course, setCourse] = useState<any>([]);
  const addNewCourse = async () => {
    try {
      const newCourse = await courseClient.createCourse(course);
      setCourses([...courses, newCourse]);

      await enrollmentsClient.enrollUser({
        userId: currentUser._id,
        courseId: newCourse._id,
      });
      
      dispatch(enrollCourse({ 
        userId: currentUser._id, 
        courseId: newCourse._id 
      }));
    } catch (error) {
      console.error("Failed to create course or enroll:", error);
    }
  };

  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course :any) => course._id !== courseId));
  };


  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c: any) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
      courses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  };
 

  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    enrolling={enrolling}
                    setEnrolling={setEnrolling}
                    updateEnrollment={updateEnrollment}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  {" "}
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
