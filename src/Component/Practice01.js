import React from 'react';
import styles from './style.module.css';
function Practice01() {
  return(
<div>
  <h3 className={styles.someClassInCssModule}>Using CSS to style an HTML Form</h3>
  <div>
    <form action="/action_page.php">
      <label htmlFor="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      <label htmlFor="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
      
      <input type="submit" defaultValue="Submit" />
    </form>
  </div>
</div>


    
    
  )
}

export default Practice01;
