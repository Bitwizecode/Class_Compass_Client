import React, { createContext, useContext, useState } from "react";
const ExamResultContext = createContext(null);

const ExamResultContextProvider = ({ children }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [resultsData, setResultsData] = useState({
    "Ravi Gupta": {
      name: "Ravi Gupta",
      fathername: "Raju D Gupta",
      class: "10-A",
      div: "A",
      rollno: 151,
      dob: "12-12-2001",
      isResultSet: true,
      marks: {},
    },

    "Rahul Gupta": {
      name: "Rahul Gupta",
      fathername: "Raju Devnath Gupta gipta gupta gupt prathamesh rohit Gupta prathamesh rohit Guptaprathamesh rohit Gupta",
      class: "10-B",
      div: "B",
      rollno: 151,
      dob: "12-12-2001",
      isResultSet: true,
      marks: {},
    },

    "Raj Gupta": {
      name: "Raj Gupta",
      fathername: "Raju D Gupta",
      class: "10-C",
      div: "C",
      rollno: 151,
      dob: "12-12-2001",
      isResultSet: true,
      marks: {},
    },

    "Prathamesh Chavan": {
      name: "Prathamesh Chavan",
      fathername: "Shashikant C",
      class: "10-D",
      div: "D",
      rollno: 151,
      dob: "12-12-2001",
      isResultSet: true,
      marks: {},
    },

    "Siddhu Gupta": {
      name: "Siddhu Gupta",
      fathername: "Shashikant Chavan",
      class: "10-E",
      div: "E",
      rollno: 151,
      dob: "12-12-2001",
      isResultSet: true,
      marks: {},
    },

    "Rohit Gupta": {
      name: "Rohit Gupta",
      fathername: "Raju D G",
      class: "10-F",
      div: "F",
      rollno: 151,
      dob: "12-12-2001",
      isResultSet: true,
      marks: {},
    },
  });
  return (
    <ExamResultContext.Provider
      value={{
        selectedStudent,
        setSelectedStudent,
        setResultsData,
        resultsData,
      }}
    >
      {children}
    </ExamResultContext.Provider>
  );
};

export const useExamResultContext = () => {
  const { selectedStudent, setSelectedStudent, setResultsData, resultsData } =
    useContext(ExamResultContext);
  return {
    selectedStudent,
    setSelectedStudent,
    setResultsData,
    resultsData,
  };
};

export default ExamResultContextProvider;
