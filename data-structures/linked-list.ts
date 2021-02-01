class LinkedNode {
  data: any;
  next: LinkedNode = null;

  constructor(data: any) {
    this.data = data;
  }
}

class LinkedList {
  head: LinkedNode = null;

  constructor(data: any) {
    if (data === 0 || data) this.append(data);
  }

  prepend(data: any): void {
    const current = this.head;
    this.head = new LinkedNode(data);
    this.head.next = current;
  }

  append(data: any): void {
    if (this.head === null) {
      this.head = new LinkedNode(data);
      return;
    }

    const lastNode: LinkedNode = this.getLast();
    lastNode.next = new LinkedNode(data);
  }

  remove(position = 0) {
    let current = this.head;

    if (current === null) {
      return current;
    }

    if (position === 0) {
      this.head = current.next;
      return;
    }

    for (let i = 0; i < position - 1; i++) {
      current = current.next;
    }

    current.next = current.next.next;
  }

  insertAtPosition(data, position = 0) {
    const newNode = new LinkedNode(data);
    let current = this.head;

    if (current === null) {
      return newNode;
    }

    if (position === 0) {
      newNode.next = current;
      this.head = newNode;
      return;
    }

    for (let i = 0; i < position - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  print() {
    if (this.head === null) return;

    let current = this.head;
    while (current.next !== null) {
      console.log(current.data);
      current = current.next;
    }
    console.log(current.data);
  }

  reversePrint() {
    if (this.head === null) return;
    const listData = [];

    let current = this.head;
    while (current.next !== null) {
      listData.push(current.data);
      current = current.next;
    }
    listData.push(current.data);

    for (let i = listData.length - 1; i >= 0; i--) {
      console.log(listData[i]);
    }
  }

  getLast() {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  set tail(value: any) {
    this.append(value);
  }

  get tail() {
    return this.getLast();
  }
}
