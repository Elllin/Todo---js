import { Component } from "./component.js";

export class CardDeletion extends Component {
  constructor({ model }) {
    super();
    this.model = model;
    this.closetBtn = "card-delete-btn";
    this.card = ".column__card";
  }

  addClickHandler({ target }) {
    if (target.dataset.type !== this.closetBtn) return;
    if (confirm("선택하신 카드를 삭제하시겠습니까?"))
      return this.getCardInfo(target);
  }

  getCardInfo(target) {
    const currentCard = target.closest(this.card);
    debugger;
    const currentCardId = this.model.getCardList(currentCard).id;
    this.deleteData(currentCardId);
  }

  deleteData(id) {
    const url = `http://15.165.163.174:8080/card/${id}`;
    fetch(url, { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          this.model.deleteCard(id);
        } else {
          console.error(res.statusText);
        }
      })
      .catch((err) => console.error(err));
  }
}
