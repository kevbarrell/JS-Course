window.addEventListener("load", () => {
    const form = document.querySelector("#empForm");
    const getValue = (id) => document.querySelector(`#${id}`).value;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log({
        EmployeeID: getValue("id"),
        FullName: getValue("name"),
        Extension: getValue("ext"),
        Email: getValue("email"),
        Department: getValue("department"),
      });
    });
  });
  