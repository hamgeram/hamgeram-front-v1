import {deleteCompetitors, getCompetitors} from "../services/Competitors";
import {store} from "../store";

export const handleGetCompetitor = (id) => {
    return async (dispatch) => {
        const {data, status} = await getCompetitors(id);
        console.log(
            data , status
        )
        await dispatch({ type: "SET_COMPETITOR", payload: data });
    };
};

export const handleCourseDelete = (competitorId) => {
    return async (dispatch, getState) => {
        const Id = [store.getState().competitors];
        const filteredId = Id.filter(
            (course) => course.id !== competitorId
        );

        try {
            await dispatch({
                type: "DELETE_COMPETITOR",
                payload: [...filteredId],
            });
            const { status } = await deleteCompetitors(competitorId);
        } catch (ex) {
            await dispatch({ type: "DELETE_COMPETITOR", payload: [...Id] });
        }
    };
};




// export const handleSetCompetitor = (user) => {
//     return async
// }
//
//
//
// export const handleCourseDelete = (courseId) => {
//     return async (dispatch, getState) => {
//         const courses = [...getState().courses];
//         const filteredCourses = courses.filter(
//             (course) => course._id !== courseId
//         );
//
//         try {
//             await dispatch({
//                 type: "CLEAR_COMPETITOR",
//                 payload: [...filteredCourses],
//             });
//             const { status } = await deleteCourse(courseId);
//
//             if (status === 200) successMessage("دوره با موفقیت پاک شد.");
//         } catch (ex) {
//             await dispatch({ type: "DELETE_COURSE", payload: [...courses] });
//         }
//     };
// };
