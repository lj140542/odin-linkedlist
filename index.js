const LinkedList = (() => {
  let firstNode = null;
  let lastNode = null;
  const append = (value) => {
    let n = Node(value, null);
    if (lastNode == null) {
      firstNode = n;
    }
    else {
      lastNode.setNextNode(n);
    }
    lastNode = n;
  };
  const prepend = (value) => {
    let n = Node(value, firstNode);
    firstNode = n;
    if (lastNode == null) { lastNode = n; }
  };
  const toString = () => {
    let ret = '';
    for (let n = firstNode; n != null; n = n.getNextNode()) {
      ret += n.getNextNode() == null ? n.toString() : n.toString() + ' -> ';
    }
    return ret;
  };
  const size = () => {
    let size = 0;
    for (let n = firstNode; n != null; n = n.getNextNode()) { size++; }
    return size;
  };
  const head = () => firstNode;
  const tail = () => lastNode;
  const at = (index) => {
    let i = 0;
    if (index <= 0) { return null; }
    for (let n = firstNode; n != null; n = n.getNextNode()) {
      i++;
      if (i == index) { return n; }
    }
    return null;
  };
  const pop = () => {
    let n = null;
    if (lastNode == null) { return; }
    else if (firstNode == lastNode) {
      firstNode = null;
      lastNode = null;
    }
    else {
      n = at(size() - 1);
      n.setNextNode(null);
      lastNode = n;
    }
  };
  const contains = (value) => {
    for (let n = firstNode; n != null; n = n.getNextNode()) {
      if (n.getValue() == value) { return true; }
    }
    return false;
  };
  const find = (value) => {
    let i = 0;
    for (let n = firstNode; n != null; n = n.getNextNode()) {
      i++
      if (n.getValue() == value) { return i; }
    }
    return null;
  };
  const insertAt = (value, index) => {
    let listSize = size();
    if (index <= 0 || index > listSize + 1) { return; }
    else if (index == listSize + 1) { append(value); }
    else {
      let before = at(index - 1);
      let n = Node(value, before.getNextNode());
      before.setNextNode(n);
    }
  };
  const removeAt = (index) => {
    let listSize = size();
    if (index <= 0 || index > listSize) { return; }
    else if (index == listSize) { pop(); }
    else if (index == 1) { firstNode = at(2); }
    else { at(index - 1).setNextNode(at(index).getNextNode()); }
  };
  return { append, prepend, toString, size, head, tail, at, pop, contains, find, insertAt, removeAt };
})();

const Node = (value, nextNode) => {
  const getValue = () => value;
  const getNextNode = () => nextNode;
  const setNextNode = (n) => { nextNode = n; }
  const toString = () => { return `( ${value} )`; }
  return { getValue, getNextNode, setNextNode, toString };
};

LinkedList.append('jambes');
LinkedList.prepend('bras');
LinkedList.append('queue');
LinkedList.prepend('tete');
console.log(LinkedList.toString());
console.log(LinkedList.size());
console.log(LinkedList.head().toString());
console.log(LinkedList.tail().toString());
console.log(LinkedList.at(2).toString());
console.log('');
LinkedList.pop();
console.log(LinkedList.toString());
console.log(LinkedList.size());
console.log(LinkedList.tail().toString());
console.log('');
console.log(LinkedList.contains('bras'));
console.log(LinkedList.contains('null'));
console.log(LinkedList.find('bras'));
console.log(LinkedList.find('null'));
console.log('');
console.log(LinkedList.toString());
LinkedList.insertAt('toomuch', 5)
console.log(LinkedList.toString());
LinkedList.insertAt('queue', 4)
console.log(LinkedList.toString());
LinkedList.removeAt(5);
console.log(LinkedList.toString());
LinkedList.removeAt(3);
console.log(LinkedList.toString());
LinkedList.insertAt('jambes', 3);
console.log(LinkedList.toString());
LinkedList.removeAt(4);
console.log(LinkedList.toString());