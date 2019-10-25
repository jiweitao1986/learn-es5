function Node(element) {
  this.elem = element;
  this.next    = null;
}

function LinkList() {
  this.head = new Node('head');
}

LinkList.prototype.find = function(elem) {
  var currNode = this.head;
  while(currentNode.elem != elem) {
    currNode = currNode.next;
  }
  return currNode;
}

/**
 * 在targetElem节点之后插入节点
 */
LinkList.prototype.insert = function(newElem, targetElem) {
  var newNode = new Node(newElem);
  var targetNode = this.find(targetElem);
  newNode.next = target.next;
  targetNode.next = newNode;
}

/**
 * 查找elem之前的元素
 */
LinkList.prototype.findPrev = function(elem) {
  var currNode = this.head;
  while(!currNode.next &&  currNode.next.elem !== elem) {
    currNode = currNode.next;
  }
  return currNode;
}

/**
 * 删除elem
 */
LinkList.prototype.remove(elem) = function(elem) {
  var prevNode = this.findPrev(elem);
  if (!this.prevNode.next) {
    prevNode.next = prevNode.next.next;
  }
}