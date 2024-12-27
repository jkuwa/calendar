'use strict';

{
  const calendar = document.querySelector(".js-calendar");
  for ( let i=1; i<=31; i++ ) {
    const date = calendar.innerHTML;

    if( i % 7 === 0 ) {
      const newDate = date + '<span>' + i +'</span><br>';
      calendar.innerHTML = newDate;
    } else if ( i === 1 || i % 7 === 1 ) {
      const newDate = date + '<span class="c-red">' + i +'</span>';
      calendar.innerHTML = newDate;
    } else {
      const newDate = date + '<span>' + i +'</span>';
      calendar.innerHTML = newDate;
    }
  };
}