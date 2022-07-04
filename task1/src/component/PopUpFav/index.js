import React from 'react'
import "./style.css"

function PopUp() {
  return (
 <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add Movie To Favorites</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Do you want to add Fantastic Beasts: {oneMovie.title} to favorites list?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">YES</button>
        <button type="button" class="btn btn-primary">NO</button>
      </div>
    </div>
  </div>
</div> 
  )
}

export default PopUp