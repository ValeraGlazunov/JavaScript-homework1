        // console.log("Hello World")
            // console.log(document)

    function getDay() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const getDay = new Date().getDay();
        console.log(daysOfWeek[getDay]);
      }
      
      getDay();

      function getMonth() {
        const months = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const getMonth = new Date().getMonth();
        console.log(months[getMonth]);
      }
      
      getMonth();

      function getYear() {
        const getYear = new Date().getFullYear();
        console.log(getYear);
      }
      
      getYear();