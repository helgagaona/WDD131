const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
      {
        sectionNum: 1,
        roomNum: "STC 353",
        enrolled: 26,
        days: "TTh",
        instructor: "Bro T",
      },
      {
        sectionNum: 2,
        roomNum: "STC 347",
        enrolled: 25,
        days: "TTh",
        instructor: "Sis A",
      },
    ],
    changeEnrollment: function (sectionNum, add = true) {
        const section = this.sections.find((s) => s.sectionNum == sectionNum);
        if (section) {
          if (!add && section.enrolled === 0) return; // Prevent negative enrollment
          section.enrolled += add ? 1 : -1;
          renderSections(this.sections);
        }
      }
  };
  
  function setCourseInfo(course) {
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
  }
  
  function renderSections(sections) {
    document.querySelector("#sections").innerHTML = sections.map(
      (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    ).join("");
  }
  
  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum, true);
  });
  
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum, false);
  });
  
  setCourseInfo(aCourse);
  renderSections(aCourse.sections);
  