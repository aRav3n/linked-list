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
    }
  };
  // prepend(value)
  // size - returns list length
  // head - returns first node in the list
  // tail - returns last node in list
  // at(index) - returns node at index
  // pop
  // contains(value) - search for value, returns a boolean
  // find(value) - if value in list then return index of node, else return null
  // toString - return list as a string: ( value ) -> ( value ) -> null
  // insertAt(value, index) - inserts node at index
  // removeAt(index) - removes node at index

  return { rootNode, append };
}
