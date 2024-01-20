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
function linkedList() {
  let rootNode = node();
  // append(value)
  const append = function (value, currentNode) {
    if (!currentNode) {
      append(value, rootNode);
    }
    if (currentNode.value === null) {
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
  // toString - return list as a string: ( value ) -> ( value ) -> null
  // insertAt(value, index) - inserts node at index
  // removeAt(index) - removes node at index

  return { rootNode, append, prepend, size, head, tail, at, pop, contains };
}
