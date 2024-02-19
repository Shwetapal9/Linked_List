class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LL {
  constructor(data) {
    this.head = null;
  }

  // Insert at Beginning

  insertAtStart(data) {
    const node = new Node(data);

    node.next = this.head;
    this.head = node;
  }

  // Insert at the End

  addAtEnd(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let curr = this.head;

    while (curr.next) {
      curr = curr.next;
    }
    node.next = curr.next;
    curr.next = node;
  }

  // Function to calculate the size of LL

  size() {
    let count = 0;
    let curr = this.head;
    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  //Function to print he Linked List

  printLL() {
    let curr = this.head;
    while (curr !== null) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

let l1 = new LL();
l1.insertAtStart(5);
l1.insertAtStart(7);
l1.insertAtStart(9);
l1.insertAtStart(1);
l1.addAtEnd(2);
l1.addAtEnd(3);
l1.printLL();
console.log(l1.size());
