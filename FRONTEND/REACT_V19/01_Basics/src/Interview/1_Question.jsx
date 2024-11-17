// const Practice1 = () => {
//   const students = [];
//   return (
//     <>
//       <p>{students.length && "No Students Found"}</p>
//       <p>Number of Students : {students.length}</p>
//     </>
//   );
// };

/* How to get the accurate quotation when length of student is 0. 
   For example, when student.length = 0, then show No Students Found
   else don't show it.
*/

/* Solution :  */

const Practice1 = () => {
  const students = [];
  return (
    <>
      <p>{!students.length && "No Students Found"}</p>
      <p>Number of Students : {students.length}</p>
    </>
  );
};

export default Practice1;
