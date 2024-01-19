// LinkedList factory
function linkedList() {
  // append(value)
  const append = function(value) {
    
  }
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
}

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
