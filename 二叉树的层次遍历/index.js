const tree = {
  value: 8,
  left: {
    value: 6,
    left: {
      value: 5
    },
    right: {
      value: 7
    }
  },
  right: {
    value: 10,
    left: {
      value: 9
    },
    right: {
      value: 11
    }
  }
}


function PrintFromTopToBottom(root) {
  const result = [];
  const queue = [];
  if (root) {
    queue.push(root);
    while (queue.length > 0) {
      const current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      result.push(current.value);
    }
  }
  return result;
}