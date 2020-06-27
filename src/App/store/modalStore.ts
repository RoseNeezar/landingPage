import { RootStore } from "./rootStore";
import { observable, action } from "mobx";

//store to open close modal
export default class ModalStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable openModal = true;

  @action setOpenModal = (open: boolean) => {
    this.openModal = open;
  };
}
