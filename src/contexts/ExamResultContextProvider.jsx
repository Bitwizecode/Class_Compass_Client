import React, { createContext, useContext, useState } from "react";
const ExamResultContext = createContext(null);

const ExamResultContextProvider = ({ children }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  return (
    <ExamResultContext.Provider
     value={{selectedStudent, setSelectedStudent}}>
      {children}
    </ExamResultContext.Provider>
  );
};

export const useExamResultContext = () => {
  const {selectedStudent, setSelectedStudent} = useContext(ExamResultContext);
   return{
    selectedStudent, setSelectedStudent
   }
};

export default ExamResultContextProvider;
