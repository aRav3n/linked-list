// Node factory with value and nextNode pointer, both set to null by default
function node(value, nextNode) {
  if (!value) {
    value = null;
  }
  if (!nextNode) {
    nextNode = null;
  }
  return { value, nextNode };
}

// LinkedList factory
const linkedList = function() {
  let rootNode = node();
  // append(value)
  const append = function (value, currentNode) {
    if (!currentNode) {
      append(value, rootNode);
    } else if (currentNode.value === null) {
      currentNode = node(value);
    } else if (currentNode.nextNode === null) {
      currentNode.nextNode = node(value);
      return true;
    }
  };
  // prepend(value)
  const prepend = function (value) {
    if (rootNode.value === null) {
      rootNode = node(value);
      return true;
    } else {
      const oldRootNode = rootNode;
      const newRootNode = node(value, oldRootNode);
      rootNode = newRootNode;
    }
  };
  // size - returns list length
  const size = function () {
    let counter = 0;
    const traverseList = function (currentNode) {
      if (currentNode.value !== null) {
        counter++;
      }
      if (currentNode.nextNode !== null) {
        traverseList(currentNode.nextNode);
      }
      console.log(counter);
      return counter;
    };
    const length = traverseList(rootNode);
    return length;
  };
  // head - returns first node in the list
  const head = function () {
    return rootNode;
  };
  // tail - returns last node in list
  const tail = function () {
    const traverseList = function (currentNode) {
      if (currentNode.nextNode !== null) {
        traverseList(currentNode.nextNode);
      }
      return currentNode;
    };
    traverseList(rootNode);
  };
  // at(index) - returns node at index
  const at = function (index) {
    let currentPosition = 0;
    const traverseList = function (currentNode) {
      if (currentPosition === index) {
        return currentNode;
      } else if (currentNode.nextNode !== null) {
        currentPosition++;
        traverseList(currentNode.nextNode);
      }
      console.log(
        `Whoops, looks like ${currentPosition} is the highest position in this list`
      );
      return false;
    };
    const nodeAt = traverseList(rootNode);
    return nodeAt;
  };
  // pop
  const pop = function () {
    const lastNode = at(size() - 1);
    const secondToLastNode = at(lastNodeIndex - 1);
    lastNode.value = null;
    secondToLastNode.nextNode = null;
  };
  // contains(value) - search for value, returns a boolean
  const contains = function (value) {
    const length = size();
    for (let i = 0; i < length; i++) {
      if (at(i).value === value) {
        return true;
      }
    }
    return false;
  };
  // find(value) - if value in list then return index of node, else return null
  const find = function (value) {
    const length = size();
    for (let i = 0; i < length; i++) {
      if (at(i).value === value) {
        return i;
      }
    }
    return null;
  };
  // toString - return list as a string: ( value ) -> ( value ) -> null
  const toString = function () {
    const length = size();
    if (length === 0) {
      return "Yo! There's nothing in this linked list!";
    }
    let string = "";
    for (let i = 0; i < length; i++) {
      const value = at(i).value;
      string += `( ${value} ) -> `;
    }
    string += "null";
    return string;
  };
  // insertAt(value, index) - inserts node at index
  const insertAt = function (value, index) {
    if (index === 0) {
      prepend(value);
    } else if (index >= size()) {
      append(value);
    } else {
      const parentNode = at(index - 1);
      const childNode = at(index);
      const newNode = node(value, childNode);
      parentNode.nextNode = newNode;
    }
    return true;
  };
  // removeAt(index) - removes node at index
  const removeAt = function (index) {
    const parentNode = at(index - 1);
    const childNode = at(index + 1);
    at(index).value = null;
    at(index).nextNode = null;
    parentNode.nextNode = childNode;
    return true;
  };

  return {
    rootNode,
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

const newList = linkedList();

// test section
console.log("Let the tests begin!");
newList.append(3);
newList.prepend(2);
const size = newList.size();
console.log(size);
const valueAtHead = newList.head().value;
console.log(`head value is ${valueAtHead} (should be 2)`);
const valueAtTail = newList.tail().value;
console.log(`value at tail is ${valueAtTail} (should be 3)`);
const valueAtOne = newList.at(1);
console.log(`value at index 1 is ${valueAtOne} (should be 3)`);
newList.pop();
if (!newList.contains(3)) {
  console.log("success, last node popped off");
}
newList.append(5);
if (newList.contains(5)) {
  console.log("yes, contains 5; added successfully");
}
const indexOfFive = newList.find(5);
console.log(`index of 5 should be 1 and is: ${indexOfFive}`);
const stringOfList = newList.toString();
console.log(`string should be 2 then 5 and is: ${stringOfList}`);
newList.insertAt(3, 1);
const newString = newList.toString();
console.log(`new string should be 2, 3, 5 and is: ${newString}`);
newList.removeAt(1);
const finalString = newList.toString();
console.log(`string should be 2 then 5 and is: ${finalString}`);
