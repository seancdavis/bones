<?php include 'partials/header.php' ?>

<div class="container">
  
  <h2>Basic Form</h2>
  <form>
    <label>Text Field:</label>
    <input type="text" placeholder="placeholder text">
    <label>Email Field:</label>
    <input type="email">
    <label>Password Field:</label>
    <input type="password">
    <label>Text Area:</label>
    <textarea>Default Text Area...</textarea>
    <select>
      <option selected>Selected Item</option>
      <option>Item 2</option>
      <option>Item 3</option>
    </select>
    <select multiple>
      <option selected>Selected Item</option>
      <option>Item 2</option>
      <option>Item 3</option>
    </select>
    <label><input name="matching_name" type="radio" checked> Checked Item</label>
    <label><input name="matching_name" type="radio"> Item 2</label>
    <label><input name="matching_name" type="radio"> Item 3</label>
    <label><input type="checkbox" checked> Checked Item</label>
    <label><input type="checkbox"> Item 2</label>
    <label><input type="checkbox"> Item 3</label>
  </form>

  <h2>Form with Fieldset</h2>
  <form>
    <fieldset>
      <legend>Fieldset</legend>
      <input type="text" placeholder="Text within fieldset">
      <textarea></textarea>
      <input type="submit" value="Submit">
    </fieldset>
  </form>

</div>      

<?php include 'partials/footer.php' ?>