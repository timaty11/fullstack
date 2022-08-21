class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

function createLinkedList(nodes) {
  let list = new LinkedList();

  for (i in nodes) {
    list.add(nodes[i]);
  }
  return list;
}

class LinkedList {
  constructor() {
    this.head = null;
    this.last = null;
    this.size = 0;
  }
  getArr() {
    let arr = [], ind = 0, tmp = this.head;
    while (tmp != null) {
      arr[ind++] = tmp.data;
      tmp = tmp.next;
    }
    return arr;
  }

  [Symbol.iterator]() {
    var index = -1;
    var data  = this.getArr();

    return {
      next: () => ({ value: data[++index], done: !(index in data) })
    };
  };

  add(value) {
    let n = new Node(value);
    if (this.size == 0) {
      this.head = this.last = n;
    }
    else {
      this.last.next = n;
      this.last = n;
    }
    this.size++;
  }

  remove(value) {
    if (this.size == 0) {
      return false;
    }
    
    if (this.head.data == value) {
      this.head = this.head.next;
      this.size--;

      return true;
    }

    if (this.size == 1)
    {
      return false;
    }

    if (this.contains(value)) {
      let tmp = this.head;  

      while(tmp.next.data != value) {
        tmp = tmp.next;
      }

      if (tmp.next.next == null) {
        this.last = tmp;
      }
      
      tmp.next = tmp.next.next;
      this.size--;

      if (this.size == 1) {
        this.head = this.last;
      }

      return this.contains(value);
    }
  }

  contains(value) {
    if (this.size == 0) {
      return false;
    }
    
    let tmp = this.head;                
    
    while(tmp.data != value) {
      if (!tmp.next) {
        return false;
      }
      
      tmp = tmp.next;
    }
    return true;
  }

  clear() {
    this.head = this.last = null;
    this.size = null;
  }

  count() {
    return this.size;
  }

  log() {
    let res = "";
    let tmp = this.head;

    while(tmp != null) {
      res += tmp.data;

      if (tmp.next != null) {
        res += ", ";
      }

      tmp = tmp.next;
    }
    console.log(res);
  }
}
