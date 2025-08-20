const insert = document.getElementById('keyPressed')

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
      <div class="output">
        <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${event.key === " " ? "Space" : event.key}</td>
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
  </tr>
</table>
      </div>
    `
})