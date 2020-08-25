export function templateCard(data) {
  const card = `
            <li class="column__card flex" draggable="true" data-card-id=${data.id}>
                <div class="card__left flex" >
                   <div class="card__contents" >
                      <i class="far fa-calendar-check card__icon"></i>
                      <span class="card__content">${data.content}</span>
                   </div>
                   <div class="card__btn">
                    <button type="button" class="close-btn">
                      <i class="fas fa-times" data-type='card-delete-btn'></i>
                    </button>
                  </div>
                </div>
                <div class="card__right">
                  <span class="card__author">Added by <strong>${data.author}</strong></span>
                </div>
            </li>
          `;
  return card;
}
